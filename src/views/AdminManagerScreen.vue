<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 col-sm-12" v-if="sidebar">
        <sidebar :criterias="criterias"
                 @toggleSidebar="toggleSidebar"
                 @toggleCriteriaSelection="toggleCriteriaSelection"
                 @prepareSearch="prepareSearch"
                 @setSearchParams="setSearchParams" />
      </div>
      <div class="col-md-9 relative pr-5 col-sm-12 px-5 min-h100vh" :class="{'col-md-12': !sidebar}">
        <div class="absolute sidebar-inner-toggler" v-if="!sidebar">
          <button class="btn btn-white btn-sm px-2 fs-18 bg-purple inner-toggle-btn text-white"
                  @click="toggleSidebar()">
            <i class="fa fa-chevron-right" />
          </button>
        </div>
        <manager-list ref="manager_list"
                      :criterias="criterias"
                      :searchParams="searchParams"
                      @removeCriteria="removeCriteria"
                      @removeSearchTag="removeSearchTag" />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import ManagerList from "../components/ManagerList";
export default {
  name: "AdminManagerScreen",
  components: {ManagerList, Sidebar},
  created() {
    document.title = "Manager Screen";
  },
  data() {
    return {
      sidebar: true,
      criterias: [
        { type: 'Religion', choosed: null, values: ['Islam', 'Hindu', 'Christian', 'Buddhist']},
        { type: 'Country', choosed: null, values: ['UK', 'Denmark', 'Bangladesh']},
        { type: 'Ethnicity', choosed: null, values: ['British', 'Danish', 'Bangladeshi']},
        { type: 'Marital Status', choosed: null, values: ['Unmarried', 'Married', 'Divorced']},
      ],
      searchParams: []
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
    toggleCriteriaSelection(cIndex, choosedIndex) {
      this.criterias[cIndex].choosed = choosedIndex;
    },
    prepareSearch(params) {
      this.searchParams = params;
    },
    setSearchParams(obj) {
      if(obj && obj.type && obj.type !== 'tags') {
        let objIndex = this.searchParams.findIndex(item => item.type === obj.type);
        if(objIndex >= 0) {
          this.searchParams[objIndex] = obj;
        } else {
          this.searchParams.push(obj);
        }
      } else {
        let data = this.searchParams.filter(nontag => nontag.type !== 'tags');
        this.searchParams = data.concat(obj);
      }
    },
    removeCriteria(index) {
      this.criterias[index].choosed = null;
    },
    removeSearchTag(index) {
      this.searchParams.splice(index);
    }
  }
}
</script>

<style scoped>

</style>
