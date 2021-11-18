<template>
  <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
  <div>
    <h2 class="fs-36 text-black-olive py-2">Search Result</h2>
    <div class="d-flex justify-content-between items-center">
      <h2 class="fs-14">Matches for your requirements: {{ managers.length }} results</h2>
      <div class="d-flex">
        <button class="btn btn-sm bg-purple text-white br-12 btn-b-outline fs-12">Manage Filters <i class="fa fa-list ml-1" /></button>
        <button class="btn btn-sm bg-purple text-white br-12 ml-2 btn-b-outline fs-12">Advance Search <i class="fa fa-search ml-1" /></button>
      </div>
    </div>
    <div class="d-flex mt-2 justify-content-between items-center">
      <div class="d-flex items-center">
        <button class="btn btn-sm transparent"
                @click="toggleDisplayView('listview')"
                :class="{'pl-1 pr-1 pt-1 text-white bg-purple': displayView === 'listview'}">
          <i class="fa fa-th-large fs-20" />
        </button>
        <button class="btn btn-sm transparent ml-1"
                @click="toggleDisplayView('tableview')"
                :class="{'pl-1 pr-1 pt-1 text-white bg-purple': displayView === 'tableview'}">
          <i class="fa fa-list fs-20" />
        </button>
      </div>
      <div class="flex">
        <span class="badge bg-light-purple text-white fs-12 p-2 br-10 mr-1"
              v-for="(criteria, cIndex) in criterias"
              v-if="criteria.choosed != null"
              :key="'params_' + cIndex">
          {{ criteria.values[criteria.choosed] }}
          <i class="fa fa-times cursor-pointer" @click="removeCriteria(cIndex)" />
        </span>
        <span class="badge bg-light-purple text-white fs-12 p-2 br-10 mr-1"
              v-for="(param, paramIndex) in searchParams"
              :key="paramIndex">
          {{ getValue(param) }}
          <i class="fa fa-times cursor-pointer" @click="removeTag(paramIndex)" />
        </span>
        <span class="text-pink fs-14 ml-1 border-bottom-pink cursor-pointer">See more</span>
      </div>
    </div>
    <div class="mt-3">
      <list-view v-if="displayView === 'listview'"
                 :managers="managers"
                 :managerSelection="managerSelection"
                 @toggleManagerSelection="toggleManagerSelection" />
      <table-view v-if="displayView === 'tableview'"
                  :managers="managers"
                  :managerSelection="managerSelection"
                  :searchParams="searchParams"
                  @toggleManagerSelection="toggleManagerSelection" />
    </div>
  </div>
</template>

<script>
import ListView from "./ManagerView/ListView";
import TableView from "./ManagerView/TableView";
export default {
  name: "ManagerList",
  components: {TableView, ListView},
  props: ['criterias', 'searchParams'],
  data() {
    return {
      displayView: 'tableview',
      managers: [
        { id: 1, name: 'Justin Webb', age: '27', country: 'London', city: 'UK', religion: 'Islam', height: 5.8 },
        { id: 1, name: 'Justin Sebastian', age: '29', country: 'London', city: 'UK', religion: 'Islam', height: 5.10 },
        { id: 1, name: 'Justin Sebastian', age: '32', country: 'London', city: 'UK', religion: 'Islam', height: 5.7 },
        { id: 1, name: 'Justin Sebastian', age: '35', country: 'London', city: 'UK', religion: 'Islam', height: 6.1 },
      ],
      managerSelection: null
    }
  },
  methods: {
    toggleDisplayView(value) {
      this.displayView = value;
    },
    removeCriteria(index) {
      this.$emit("removeCriteria", index);
    },
    removeTag(index) {
      this.$emit("removeSearchTag", index);
    },
    toggleManagerSelection(index) {
      this.managerSelection = index;
    },
    getValue(obj) {
      if(obj.type === 'age') {
        return obj.value.min + ' - ' + obj.value.max + ' Yrs';
      } else if(obj.type === 'fromHeight' || obj.type === 'toHeight') {
        let value = obj.type === 'fromHeight' ? 'From ' : 'To ';
        return value + obj.value.feet + '.' + obj.value.inch;
      } else {
        return obj.value;
      }
    }
  }
}
</script>

<style scoped>

</style>
