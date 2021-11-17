<template>
  <div class="table-responsive">
    <table class="table">
      <tbody>
        <tr v-for="(manager, mIndex) in managers"
            :key="mIndex"
            @click="toggleManagerSelection(mIndex)"
            class="table-bg"
            :class="{'table-selection': managerSelection === mIndex}">
          <td class="pl-2">
            <div class="d-flex">
              <img src="../../../public/image/profile.jpg" alt="user" class="profile-img" />
              <div class="ml-2">
                <h4 class="fs-14 none-margin fs-12">{{ manager.name }}</h4>
                <p class="none-margin fs-12">{{ manager.country }}, {{ manager.city }}, {{ manager.year }} Yrs, {{ manager.religion }}</p>
              </div>
            </div>
          </td>
          <td><span class="badge bg-purple text-white px-2 cursor-pointer fs-12"><i class="fa fa-star"></i> Shortlist</span></td>
          <td><span class="badge bg-purple text-white px-2 cursor-pointer fs-12"><i class="fa fa-users"></i> Teamlist</span></td>
          <td><span class="badge bg-purple text-white px-2 cursor-pointer fs-12"><i class="fa fa-user-plus"></i> Connect</span></td>
          <td><span class="badge bg-pink text-white px-2 cursor-pointer fs-12"><i class="fa fa-ban"></i> Block</span></td>
          <td class="text-align-end view-profile">
            <button class="bg-purple btn btn-large text-white px-2 view-profile-btn fs-12">View Profile</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableView",
  props: ['managers', 'managerSelection'],
  methods: {
    toggleManagerSelection(index) {
      this.$emit("toggleManagerSelection", index);
    }
  }
}
</script>

<style scoped>

</style>