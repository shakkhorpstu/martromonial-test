<template>
  <div>
    <div class="card table-bg"
         v-for="(manager, mIndex) in managers"
         :key="mIndex"
         @click="toggleManagerSelection(mIndex)"
         :class="{'table-selection': managerSelection === mIndex, 'mt-4': mIndex > 0}">
      <div class="card-body">
        <div class="d-flex">
          <img src="../../../public/image/profile.jpg" alt="profile" class="profile-list-img" />
          <div class="ml-2">
            <h2 class="fs-14 text-black none-margin">{{ manager.name }}</h2>
            <p class="fs-14 text-black none-margin">{{ manager.country }}, {{ manager.city }}, {{ manager.year }} Yrs, {{ manager.religion }}</p>
            <div class="mt-2">
              <span class="badge bg-purple text-white px-2 cursor-pointer br-10"><i class="fa fa-star" /> Shortlist</span>
              <span class="badge bg-purple text-white px-2 cursor-pointer ml-2 br-10"><i class="fa fa-users" /> Teamlist</span>
              <span class="badge bg-purple text-white px-2 cursor-pointer ml-2 br-10"><i class="fa fa-user-plus" /> Connect</span>
              <span class="badge bg-pink text-white px-2 cursor-pointer ml-2 br-10"><i class="fa fa-ban" /> Block</span>
            </div>
          </div>
        </div>
        <button class="bg-purple btn btn-sm text-white px-2 mt-2 br-10">View Profile</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListView",
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
