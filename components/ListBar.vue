<template>
    <el-card>
        <el-row class="item">
            <span class="item--name">
                {{ $props.item.name }}
            </span>
            <el-button type="danger" :icon="Delete" circle @click="delItem"></el-button>
        </el-row>
    </el-card>
</template>

<script lang="ts" setup>
import { ElCard, ElRow, ElButton } from 'element-plus'; 
import { Delete } from '@element-plus/icons-vue'
</script>

<script lang="ts">

export default {
    props: [ "item" ],
    methods: {
        delItem() {
            this.$emit('delItem', this.$props.item.name, this)
        }
    }
}
</script>

<style lang="scss">
.item {
    display: flex;
    flex: 1;
    justify-content: space-between;

    &--name {
        margin: auto 0;
    }
}
</style>