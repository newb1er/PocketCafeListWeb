<template>
  <div v-if="!loading">
    <el-collapse>
      <el-collapse-item v-for="(info, index) in infos" :title="info.name" :key="index">
        <h2 class="heading">
          {{info.name}}
        </h2>
        <el-tag>
            {{ cityMap(info.city) }}
        </el-tag>
        <el-row>
          <span class="label">
           收藏日期:
          </span>
          <div>
            {{ dateParse(info.add_date) }}  
          </div>
        </el-row>
        <el-row>
          <span class="label">
            地址:
          </span>
          <span>
            {{ info.address }}
          </span>
        </el-row>

        <el-row>
          <span class="label">WiFi: </span>
          <el-rate
            v-model="info.wifi"
            disabled
            show-score
          />
        </el-row>
        <el-row>
          <span class="label">Seat: </span>
          <el-rate
            v-model="info.seat"
            disabled
            show-score
          />
        </el-row>
        <el-row>
          <span class="label">Quiet: </span>
          <el-rate
            v-model="info.quiet"
            disabled
            show-score
          />
        </el-row>
        <el-row>
          <span class="label">Tasty: </span>
          <el-rate
            v-model="info.tasty"
            disabled
            show-score
          />
        </el-row>
        <el-row>
          <span class="label">Cheap: </span>
          <el-rate
            v-model="info.cheap"
            disabled
            show-score
          />
        </el-row>
        <el-row>
          <span class="label">Music: </span>
          <el-rate
            v-model="info.music"
            disabled
            show-score
          />
        </el-row>

        <el-row>
          <a :href="info.url" v-if="info.url" class="official-site">
            <el-button>
              官方網站
            </el-button>
          </a>
          <a :href="`https://cafenomad.tw/shop/${info.id}`">
            <el-button>
              Cafe Nomad 連結
            </el-button>
          </a>
        </el-row>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="tsx" setup>
import { ElCollapse, ElCollapseItem, ElRow, ElCol, ElRate, ElButton, ElTag } from 'element-plus'
import { IListItem } from '@/composables/IListItem'
import { useHeader } from '~~/composables/useHeader'

const loading = ref(false)
const header = useHeader()
</script>

<script lang="tsx">
import { getUserInfo } from '~~/api/user'
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

    const { $api } = useNuxtApp()

    const api = $api()

    this.infos = await api.getSavedList(this.userId)
    const user = await api.getUserInfo(this.userId)

    this.header = `-- ${user.displayname} 的收藏`

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

.heading {
  margin-top: 0px;
  margin-bottom: 0px;
}

.label {
  font-size: 0.9rem;
  width: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.official-site {
  margin-right: 1rem;
}
</style>