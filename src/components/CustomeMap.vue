<template>
    <div>
        <l-map
        :center="center"
        :zoom="zoom"
        class="map"
        ref="map"
        @update:center="centerUpdated"
        @update:zoom="zoomUdapted"
        >
        <l-tile-layer
        :url="url"
        >
        </l-tile-layer>

        </l-map>
    </div>
</template>
<script setup lang="ts">
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet';
import { onMounted, ref } from 'vue';

let url = ref('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
let center = ref([6.371611, 2.398752])
let zoom = ref(20)

const centerUpdated = (center:any) =>{
    center = center
}

const zoomUdapted = (zoom:number) =>{
    zoom = zoom
}
</script>
<style scoped>
.map{
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>