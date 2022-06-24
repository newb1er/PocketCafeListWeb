<template>
  <div v-if="!loading">
    <div v-for="(info, index) in infos" :key="index">
      <list-bar :item="info" @delItem="delItem"></list-bar>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import { IListItem } from '@/composables/IListItem'

const loading = ref(false)
</script>

<script lang="tsx">
import { getSavedList } from '@/api/saved'

class StoreInfo implements IListItem {
  name: string

  constructor(name: string) {
    this.name = name
  }
}

export default {
  data() {
    return {
      userId: "",
      infos: []
    }
  },
  async mounted() {
    this.loading = true
    this.userId = this.$route.params.id

    const res = await getSavedList(this.userId)

    console.log(res)

    this.infos = res.data
    this.loading = false
  },
  methods: {
    delItem(name) {
      console.log('emit', name)
    }
  },
}
</script>

<style>

</style>