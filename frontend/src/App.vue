<template>
  <div>
    <div v-if="storyboard" class="main-container">
      <div class="title">
        <h1>
          {{ storyboard.name }} {{ storyboard.storyboard_id }}
        </h1>
      </div>
      <div>
        <div class="storyboard-info">
          <IdomooForm @formPosted="generateVideo" :isLoading="isLoading" :storyboard="storyboard"></IdomooForm>

          <div class="styled-container">
            <div v-if="!url" class="preview">
              <h2>Preview</h2>
              <img :src="storyboard.thumbnail" alt="" srcset="">
            </div>
            <div class="preview" v-else>
              <h2>Video Preview</h2>
              <div style="text-align: center;min-height: 300px;min-width: 420px;">
                <VideoPlayer v-if="!isLoading" :url="url"></VideoPlayer>
                <div v-else>
                  <img class="spinner" src="./assets/loader.svg" />
                </div>
                <button @click="generateLandingPage" class="styled-button">Generate Landing Page</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Loading Story Board</div>
    <Toast />

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getStoryboard, generateVideo, generateLandingPage, checkVideoStatus } from './services/apiService';
import IdomooForm from './components/Form.vue'
import VideoPlayer from './components/VideoPlayer.vue';
import Toast from 'primevue/toast';


export default defineComponent({
  components: { IdomooForm, VideoPlayer,Toast },
  data() {
    return {
      storyboard: null,
      storyboardId: 5111457,
      url: '',
      formData: { lastName: '', firstName: '' },
      isLoading: false
    };
  },
  created() {
    const storyboardId = this.storyboardId
    getStoryboard(storyboardId)
      .then(response => {
        this.storyboard = response.data;
      })
      .catch(error => {
        console.error('Failed to fetch storyboard:', error);
         this.$toast.add({ severity: 'error', summary: 'Failed to fetch storyboard', detail: '', life: 3000 });
      });
  },
  methods: {
    async generateVideo(formData: { lastName: string, firstName: string }) {
      this.isLoading = true;
      this.formData = formData;
      const videoRes = await generateVideo(this.storyboard!);
      console.log("🚀 ~ generateVideo ~ videoRes:", videoRes)
      const isReady = await checkVideoStatus(videoRes.data.check_status_url);
      console.log("🚀 ~ generateVideo ~ isReady:", isReady)
      if (isReady) {
        this.url = videoRes.data.output.video[0].links.url;
      }
      this.isLoading = false;
    },
    generateLandingPage() {
      const landingPageData = { lastName: this.formData.lastName, firstName: this.formData.firstName, url: this.url }
      generateLandingPage(landingPageData)
        .then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch(error => {
          console.error('Error generating landing page:', error);
          this.$toast.add({ severity: 'error', summary: 'Error generating landing page', detail: '', life: 3000 });
        });
    }
  }

});
</script>

<style scoped lang="scss">
.styled-container {
  min-width: 433px;
}

.flex1 {
  flex-basis: 1;
}

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  .title {
    h1 {
      // text-align: center;
    }
  }

  .storyboard-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    gap: 50px;



    .preview {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 100%;

      img {
        height: 300px;
        width: 100%;
      }
    }
  }
}
</style>
