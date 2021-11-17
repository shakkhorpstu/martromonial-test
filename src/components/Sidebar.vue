<template>
  <div class="relative d-flex flex-column justify-center bg-white sidebar min-h100vh br-4">
    <div class="title-box bg-purple p-2">
      <div class="d-flex items-center relative">
        <button class="btn btn-white btn-sm br-12 px-2 fs-12"><i class="fa fa-arrow-left"></i> Back</button>
        <h3 class="text-white ml-4 fs-18">Search Manager</h3>
      </div>
      <div class="absolute sidebar-toggler">
        <button class="btn btn-white btn-sm px-2 fs-18 bg-purple toggle-btn text-white" @click="toggleSidebar()"><i class="fa fa-arrow-left"></i></button>
      </div>
    </div>

    <div class="mt-3 d-flex justify-content-center">
      <button class="btn btn-sm bg-purple br-4 text-white"><i class="fa fa-search mr-1"></i> Save Search</button>
      <button class="btn btn-sm bg-purple br-4 text-white ml-2"><i class="fa fa-refresh mr-1"></i>  Load Saved Search</button>
    </div>

    <div class="mt-5 d-flex justify-content-center px-8">
      <button class="btn btn-large bg-purple bg-purple text-white pr-4 btn-b-outline br-12 w-full"><i class="fa fa-search mr-2 ml-2"></i> Search</button>
    </div>
    <a href="" class="d-flex text-center mt-2 text-purple align-center">Advanced Search</a>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    toggleSidebar() {
      this.$emit('toggleSidebar');
    }
  }
}
</script>

<style scoped>

</style>