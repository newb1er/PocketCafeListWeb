<template>
  <div v-if="!loading">
    <el-collapse>
      <el-collapse-item v-for="(info, index) in infos" :title="info.name" :key="index">
        <el-row class="flex">
          <span>
            {{ cityMap(info.city) }}
          </span>
        </el-row>
        <el-row>
          <span>新增時間:</span>
          {{ dateParse(info.add_date) }}
        </el-row>
        <el-row>
          <span class="text">網站: {{ info.url }}</span>
        </el-row>
        <el-row>地址: {{ info.address }}</el-row>
        <el-row>
          <span class="text">WiFi: </span>
          <el-rate
            v-model="info.wifi"
            disabled
            show-score
          />
        </el-row>
        <el-row>
          <span class="text">Seat: </span>
          <el-rate
            v-model="info.seat"
            disabled
            show-score
          />
        </el-row>
        <el-row>
          <span class="text">Quiet: </span>
          <el-rate
            v-model="info.quiet"
            disabled
            show-score
          />
        </el-row>
        <el-row>
          <span class="text">Tasty: </span>
          <el-rate
            v-model="info.tasty"
            disabled
            show-score
          />
        </el-row>
        <el-row>
          <span class="text">Cheap: </span>
          <el-rate
            v-model="info.cheap"
            disabled
            show-score
          />
        </el-row>
        <el-row>
          <span class="text">Music: </span>
          <el-rate
            v-model="info.music"
            disabled
            show-score
          />
        </el-row>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="tsx" setup>
import { ElCollapse, ElCollapseItem, ElRow, ElRate } from 'element-plus'
import { IListItem } from '@/composables/IListItem'

const loading = ref(false)
</script>

<script lang="tsx">
import { getSavedList } from '@/api/saved'
import { cities } from '~~/utils/cityMapping'

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
    },
    cityMap(enName) {
      return cities[enName]
    },
    dateParse(str: string) {
      const date = new Date(str)
      return date.toLocaleDateString()
    }
  },
}
</script>

<style>
.text {
  margin: auto 0;
}

.flex {
  display: "flex";
  flex: 1;
}
</style>