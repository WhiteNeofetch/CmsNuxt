<template>
<div>

  <video-player src="/video.mp4"/>

</div>
</template>

<script>

import VideoPlayer from 'nuxt-video-player'
require('nuxt-video-player/src/assets/css/main.css')
export default {
  layout:"unauthorized",
  components: {
    VideoPlayer
}
}
</script>
