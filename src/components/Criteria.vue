<template>
  <div class="br-12 w-full h-10 border-purple py-3 px-2 d-flex justify-between items-center mt-4 br-10 relative">
    <div class="selected-box text-purple br-12 px-2 text-center w-full mr-4">
      {{ criteria.choosed != null ? criteria.values[criteria.choosed] : criteria.type }}
    </div>
    <i class="fa text-purple cursor-pointer" :class="{'fa-chevron-down': !expanded, 'fa-chevron-up': expanded}" @click="expanded = !expanded"></i>
    <div class="absolute selector-items br-12 table-bg" v-if="expanded">
      <div class="d-flex flex-column py-2">
        <a class="fs-14 text-purple cursor-pointer fs-14"
           v-for="(content, cIndex) in criteria.values"
           :key="cIndex"
           @click="toggleSelection(cIndex)"
           :class="{'mt-2': cIndex > 0}">{{ content }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Criteria",
  props: ['criteria', 'criteriaIndex'],
  data() {
    return {
      expanded: false,
    }
  },
  methods: {
    toggleSelection(index) {
      this.$emit('toggleSelection', this.criteriaIndex, index);
      this.expanded = false;
    }
  }
}
</script>

<style scoped>

</style>
