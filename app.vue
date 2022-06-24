<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <h1>{{ header }}</h1>
      </el-header>
      <el-main>
        <NuxtPage />
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ElContainer, ElHeader, ElMain } from "element-plus";
import { useHeader } from "./composables/useHeader";

const header = useHeader()
</script>
