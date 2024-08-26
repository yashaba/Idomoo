<template>
  <div class="form-container styled-container">
    <form @submit.prevent="submitForm" class="styled-form">
      <h2>Enter the details below in order to generate your video</h2>
      <div class="flex">
        <FloatLabel>
          <InputText id="firstName" v-model="form.firstName" />
          <label for="firstName">First Name</label>
        </FloatLabel>
        <FloatLabel>
          <InputText id="lastName" v-model="form.lastName" />
          <label for="lastName">Last Name</label>
        </FloatLabel>
      </div>
      <!-- <input type="text" placeholder="First Name" v-model="form.firstName" class="styled-input" /> -->
      <!-- <input type="text" placeholder="Last Name" v-model="form.lastName" class="styled-input" /> -->
      <div v-for="(item, index) in storyboard.data" :key="index">
        <div v-if="item.key.includes('Media')" class="form-group">
          <label :for="`data-${index}`" class="styled-label">{{ item.key }}:</label>
          <div class="media-container">
            <ColorPicker v-model="item.val" format="rgb"></ColorPicker>
            <FileUpload ref="fileupload" mode="basic" name="demo[]" accept="image/*" auto="false" :maxFileSize="1000000"
              @select="onUpload($event, index)" />
          </div>
        </div>
        <div v-else class="form-group">
          <label :for="`data-${index}`" class="styled-label">{{ item.key }}:</label>
          <input type="text" :id="`data-${index}`" v-model="item.val" class="styled-input" />
        </div>
      </div>
      <button :disabled="isValid" type="submit" class="styled-button">
        <span v-if="!isLoading">Generate Video</span>
        <img v-else class="spinner" src="../assets/loader.svg" />
      </button>
    </form>
    <Toast />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ColorPicker from 'primevue/colorpicker';
import FileUpload from 'primevue/fileupload';
import Toast from 'primevue/toast';
import { fileUploadService } from '../services/fileUploadService'
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';


export default defineComponent({
  name: 'IdomooForm',
  components: { ColorPicker, FileUpload, Toast, InputText, FloatLabel},
  props: {
    storyboard: Object,
    isLoading: Boolean

  },
  data() {
    return {
      url: '',
      form: {
        firstName: '',
        lastName: ''
      }
    }
  },

  computed: {
    isValid(): boolean {
      return (!this.form.firstName || !this.form.lastName)
    }
  },

  methods: {
    convertRgbToString(rgb: { r: string, g: string, b: string }) {
      return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    },
    async onUpload(event: any, index: number) {
      try {
        const url = await fileUploadService.uploadFile(event)
        if (url) {
          this.storyboard!.data[index].val = url
        }
      } catch (error: any) {
        this.$toast.add({ severity: 'error', summary: 'Error while uploading file', detail: error.response.data.data.error || '', life: 3000 });
      }
    },
    submitForm() {
      if (this.form.lastName && this.form.firstName && this.storyboard && this.storyboard.data) {
        this.storyboard!.data.forEach((item: any) => {
          if (typeof item.val === 'object' && item.val.r !== undefined) {
            item.val = this.convertRgbToString(item.val);
          }
        });
        this.$emit('formPosted', { ...this.form, ...this.storyboard!.data })
      }
    }
  },
});
</script>

<style scoped lang="scss">
.spinner {
  height: 30px;
}

.styled-form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  gap:20px;
}

.styled-input,
.styled-color-input,
.styled-file-input {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 7px;
  margin-bottom: 15px;
  font-size: 1em;
  width: 90%
}

.styled-label {
  // font-weight: bold;
  margin-bottom: 5px;
  display: block;

  font-size: 13px;
  color: rgb(100, 100, 100);
  margin-left: 11px;
}

.form-group {
  // margin-bottom: 15px;
}

.media-container {
  display: flex;
  justify-content: space-around;
}
</style>
