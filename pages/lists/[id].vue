<template>
  <div v-for="(info, index) in infos" :key="index">
    <list-bar :item="info" @delItem="delItem"></list-bar>
  </div>
</template>

<script lang="tsx" setup>
import { IListItem } from '@/composables/IListItem'
</script>

<script lang="tsx">

class StoreInfo implements IListItem {
  name: string

  constructor(name: string) {
    this.name = name
  }
}

function mockInfo(): Array<IListItem> {
  return [
    new StoreInfo("Cafe"),
    new StoreInfo("7-11")
  ]
}

export default {
  methods: {
    delItem(name) {
      console.log('emit', name)
    }
  },
  computed: {
    infos() {
      const userId: string = this.$route.params.id

      console.log('user', userId)
      return mockInfo()
    }
  }
}
</script>

<style>

</style>