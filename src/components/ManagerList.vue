<template>
  <div>
    <h2 class="fs-36 text-black-olive py-2">Search Result</h2>
    <div class="d-flex justify-content-between items-center">
      <h2 class="fs-14">Matches for your requirements: 25 results</h2>
      <div class="d-flex">
        <button class="btn btn-sm bg-purple text-white br-12 btn-b-outline fs-12">Manage Filters <i class="fa fa-list ml-1"></i></button>
        <button class="btn btn-sm bg-purple text-white br-12 ml-2 btn-b-outline fs-12">Advance Search <i class="fa fa-search ml-1"></i></button>
      </div>
    </div>
    <div class="d-flex mt-2 justify-content-between items-center">
      <div class="d-flex items-center">
        <button class="btn btn-sm transparent"
                @click="toggleDisplayView('listview')"
                :class="{'pl-1 pr-1 pt-1 text-white bg-purple': displayView === 'listview'}">
          <i class="fa fa-th-large fs-20"></i>
        </button>
        <button class="btn btn-sm transparent ml-1"
                @click="toggleDisplayView('tableview')"
                :class="{'pl-1 pr-1 pt-1 text-white bg-purple': displayView === 'tableview'}">
          <i class="fa fa-list fs-20"></i>
        </button>
      </div>
      <div class="flex">
        <span class="badge bg-light-purple text-white fs-12 p-1"
              v-for="(tag, tagIndex) in tags"
              :key="tagIndex"
              :class="{'ml-1': tagIndex > 0}">
          {{ tag }} <i class="fa fa-times cursor-pointer" @click="removeTag(tagIndex)"></i>
        </span>
        <span class="text-pink fs-12 ml-1 border-bottom-pink cursor-pointer">See more</span>
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
  data() {
    return {
      displayView: 'tableview',
      tags: ['Male', 'london', '27-40 yrs', 'Islam', 'Pakistani'],
      managers: [
        { id: 1, name: 'Justin Webb', age: '27', country: 'London', city: 'UK', religion: 'Islam' },
        { id: 1, name: 'Justin Sebastian', age: '27', country: 'London', city: 'UK', religion: 'Islam' },
        { id: 1, name: 'Justin Sebastian', age: '27', country: 'London', city: 'UK', religion: 'Islam' },
        { id: 1, name: 'Justin Sebastian', age: '27', country: 'London', city: 'UK', religion: 'Islam' },
        { id: 1, name: 'Justin Sebastian', age: '27', country: 'London', city: 'UK', religion: 'Islam' },
        { id: 1, name: 'Justin Sebastian', age: '27', country: 'London', city: 'UK', religion: 'Islam' },
        { id: 1, name: 'Justin Sebastian', age: '27', country: 'London', city: 'UK', religion: 'Islam' },
        { id: 1, name: 'Justin Sebastian', age: '27', country: 'London', city: 'UK', religion: 'Islam' },
      ],
      managerSelection: null
    }
  },
  methods: {
    toggleDisplayView(value) {
      this.displayView = value;
    },
    removeTag(index) {
      this.tags.splice(index, 1);
    },
    toggleManagerSelection(index) {
      this.managerSelection = index;
    }
  }
}
</script>

<style scoped>

</style>