<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 col-sm-12" v-if="sidebar">
        <sidebar @toggleSidebar="toggleSidebar" @prepareSearch="prepareSearch" />
      </div>
      <div class="col-md-9 relative pr-5 col-sm-12 px-5 min-h100vh" :class="{'col-md-12': !sidebar}">
        <div class="absolute sidebar-inner-toggler" v-if="!sidebar">
          <button class="btn btn-white btn-sm px-2 fs-18 bg-purple inner-toggle-btn text-white" @click="toggleSidebar()"><i class="fa fa-chevron-right"></i></button>
        </div>
        <manager-list ref="manager_list" />
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
      sidebar: true
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
    prepareSearch(params) {
      this.$refs.manager_list.setSearchParams(params);
    }
  }
}
</script>

<style scoped>

</style>
