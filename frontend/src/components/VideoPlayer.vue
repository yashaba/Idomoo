<template>
    <div id="idm-player"></div>
</template>

<script lang="ts">
 declare const idmPlayerCreate: any;

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VideoPlayer',
  props: {
    url: String
  },

  mounted(){
    const player_options = {
      interactive: true,
      size: "hd",
      src: this.url,
      autoplay: false,
      mute: true,
    };
    idmPlayerCreate(player_options, "idm-player");
  }
});
</script>

<style scoped lang="scss">
#idm-player {
  width: 100%;
  height: 100%;
}
</style>
