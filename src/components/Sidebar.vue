<template>
  <div class="relative d-flex flex-column justify-center bg-white sidebar min-h100vh br-4 pb-2">
    <div class="title-box bg-purple p-2">
      <div class="d-flex items-center relative">
        <button class="btn btn-white btn-sm br-10 px-2 fs-12 text-purple"><i class="fa fa-chevron-left" /> Back</button>
        <h3 class="text-white ml-4 fs-18">Search Manager</h3>
      </div>
      <div class="absolute sidebar-toggler">
        <button class="btn btn-white btn-sm px-2 fs-18 bg-purple toggle-btn text-white" @click="toggleSidebar()"><i class="fa fa-chevron-left" /></button>
      </div>
    </div>

    <div class="mt-3 d-flex justify-content-center">
      <button class="btn btn-sm bg-purple br-10 text-white btn-b-outline"><i class="fa fa-search mr-1" /> Save Search</button>
      <button class="btn btn-sm bg-purple br-10 text-white ml-2 btn-b-outline"><i class="fa fa-refresh mr-1" /> Load Saved Search</button>
    </div>

    <div class="d-flex mt-5 items-center w-full justify-content-center px-3">
      <h2 class="fs-14 mr-4 mt-1 fs-16">Age</h2>
      <div class="slider-circle bg-light-purple d-flex items-center justify-content-center">
        <i class="fa fa-minus text-purple" />
      </div>
      <VueSimpleRangeSlider
          style="width: 300px"
          :min="1"
          :max="100"
          :logarithmic="false"
          :activeBarColor="'#6158a7'"
          v-model="age"
          class="br-4"
      />
      <div class="slider-circle bg-light-purple d-flex items-center justify-content-center">
        <i class="fa fa-plus text-purple" />
      </div>
    </div>
    <h2 class="text-center text-purple fs-16 mt-2 border-bottom-black-olive pb-4"><b>{{ age[0] }} - {{ age[1] }}</b> <span>years old</span></h2>

    <div class="d-flex items-center px-3 justify-content-between mt-4 border-bottom-black-olive pb-4">
      <h2 class="fs-16">Height</h2>
      <div class="d-flex flex-column ml-2">
        <b><i class="fa fa-chevron-up text-purple cursor-pointer fs-18" @click="fromHeight.feet++" /></b>
        <h2 class="fs-16 text-center none-margin"><b>{{ fromHeight.feet }}</b></h2>
        <b><i class="fa fa-chevron-down text-purple cursor-pointer fs-18" @click="fromHeight.feet--" /></b>
      </div>
      <h2 class="fs-20 ml-2">.</h2>
      <div class="d-flex flex-column ml-2">
        <b><i class="fa fa-chevron-up text-purple cursor-pointer fs-18" @click="fromHeight.inch++" /></b>
        <h2 class="fs-16 text-center none-margin"><b>{{ fromHeight.inch }}</b></h2>
        <b><i class="fa fa-chevron-down text-purple cursor-pointer fs-18" @click="fromHeight.inch--" /></b>
      </div>

      <div class="d-flex flex-column ml-4">
        <div class="d-flex">
          <span class="badge text-center px-2 fs-12 text- border-purple cursor-pointer"
                @click="heightMeasure = 'ft'"
                :class="{'bg-purple text-white': heightMeasure === 'ft'}">Ft</span>
          <span class="badge text-center px-2 fs-12 text- border-purple cursor-pointer ml-2"
                @click="heightMeasure = 'cm'"
                :class="{'bg-purple text-white': heightMeasure === 'cm'}">Cm</span>
        </div>
        <h2 class="fs-14 text-center mt-3"><b>To</b></h2>
      </div>

      <div class="d-flex flex-column ml-4">
        <b><i class="fa fa-chevron-up text-purple cursor-pointer fs-18" @click="toHeight.feet++" /></b>
        <h2 class="fs-18 text-center none-margin"><b>{{ toHeight.feet }}</b></h2>
        <b><i class="fa fa-chevron-down text-purple cursor-pointer fs-18" @click="toHeight.feet--" /></b>
      </div>
      <h2 class="fs-20 ml-2">.</h2>
      <div class="d-flex flex-column ml-2">
        <b><i class="fa fa-chevron-up text-purple cursor-pointer fs-18" @click="toHeight.inch++" /></b>
        <h2 class="fs-16 text-center none-margin"><b>{{ toHeight.inch }}</b></h2>
        <b><i class="fa fa-chevron-down text-purple cursor-pointer fs-18" @click="toHeight.inch--" /></b>
      </div>
    </div>

    <div class="dropdowns mt-3 mx-3">
      <criteria v-for="(criteria, cIndex) in criterias"
                :key="cIndex"
                :criteria="criteria"
                :criteriaIndex="cIndex"
                @toggleSelection="toggleCriteriaSelection" />
    </div>

    <h3 class="fs-16 text-purple text-center mt-5">Tags</h3>
    <div class="mt-1 search-tags br-12 mx-3 relative">
      <vue-tags-input
          v-model="tag"
          :tags="tags"
          @tags-changed="newTags => tags = newTags"
      />
      <div class="absolute tag-all-close">
        <div class="d-flex items-center fs-18">
          <i class="fa fa-times cursor-pointer text-purple fs-18" @click="clearTags()" />
          <i class="fa fa-chevron-down cursor-pointer text-purple fs-18 ml-2" />
        </div>
      </div>
    </div>

    <div class="mt-5 d-flex justify-content-center px-4">
      <button class="btn btn-large bg-purple bg-purple text-white pr-4 btn-b-outline br-10 w-full"><i class="fa fa-search mr-2 ml-2" /> Search</button>
    </div>
    <a href="" class="d-flex text-center mt-2 text-purple align-center">Advanced Search</a>
  </div>
</template>

<script>
import VueTagsInput from '@johmun/vue-tags-input';
import VueSimpleRangeSlider from 'vue-simple-range-slider';
import 'vue-simple-range-slider/dist/vueSimpleRangeSlider.css'
import Criteria from "./Criteria";
export default {
  name: "Sidebar",
  components: {
    Criteria,
    VueTagsInput,
    VueSimpleRangeSlider
  },
  props: ['criterias'],
  created() {
    this.prepareTheSearch();
  },
  data() {
    return {
      age: [27, 40],
      tag: '',
      tags: [{ text: 'Non smoker', tiClasses: ['ti-valid'] }],
      heightMeasure: 'ft',
      fromHeight: {
        feet: 5,
        inch: 7
      },
      toHeight: {
        feet: 5,
        inch: 7
      },
    }
  },
  watch: {
    age: function (val) {
      let data = {
        type: 'age',
        value: { min: val[0], max: val[1] }
        };
      this.$emit("setSearchParams", data);
    },
    fromHeight: function (val) {
      let data = {
        type: 'fromHeight',
        value: val
      };
      this.$emit("setSearchParams", data);
    },
    toHeight: function (val) {
      let data = {
        type: 'toHeight',
        value: val
      };
      this.$emit("setSearchParams", data);
    },
    tags: function(val) {
      let data = [];
      val.forEach(item => {
        data.push({ type: 'tags', value: item.text });
      });
      this.$emit("setSearchParams", data);
    }
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggleSidebar');
    },
    clearTags() {
      this.tags = [];
      this.tag = '';
    },
    toggleCriteriaSelection(cIndex, choosedIndex) {
      this.$emit("toggleCriteriaSelection", cIndex, choosedIndex);
      this.criterias[cIndex].choosed = choosedIndex;
    },
    prepareTheSearch() {
      let data = [
        { type: 'age', value: { min: this.age[0], max: this.age[1] } },
        { type: 'fromHeight', value: this.fromHeight },
        { type: 'toHeight', value: this.toHeight },
      ];
      this.tags.forEach(item => {
        data.push({ type: 'tags', value: item.text });
      });
      this.$emit("prepareSearch", data);
    }
  }
}
</script>

<style scoped>

</style>
