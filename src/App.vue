<template>
  <v-app style="background: rgba(0,0,0,0);">
    <div
      id="web_bg"
      :style="'background-image: url(' + imgUrl + ');'"
    ></div>
    <v-app-bar app color="rgba(0,0,0,.2)" dark flat fixed>
      <v-toolbar-title>Life In NJU</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon
        @click="open('https://github.com/idealclover/Life-in-NJU')"
        class="mx-3"
      >
        mdi-github-circle
      </v-icon>
      <v-icon
        class="shareLink"
        data-clipboard-text="https://nju.today"
        @click="showToast('链接已复制，快分享给小伙伴吧！')"
      >
        mdi-open-in-new
      </v-icon>
    </v-app-bar>
    <v-content class="mt-12">
      <v-container>
        <v-col align="center" justify="center" class="pa-0">
          <v-img
            class="logo-item"
            :src="engineList[engineIndex]['src']"
            @click="changeEngine"
          ></v-img>
          <v-text-field
            flat
            solo
            class="my-10"
            label="Search"
            v-model="value"
            append-icon="search"
            @click:append="search"
            @keyup.enter="search"
          ></v-text-field>
        </v-col>
      </v-container>
      <v-container>
        <v-expansion-panels multiple>
          <!-- <v-expansion-panels multiple :value="[0, 1, 2, 3]"> -->
          <v-expansion-panel
            v-for="(category, i) in data"
            :key="i"
            class="panels"
          >
            <v-expansion-panel-header>{{
              category.title
            }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col
                  class="pa-1 d-flex flex-column"
                  cols="12"
                  lg="3"
                  v-for="(item, i) in category.items"
                  :key="i"
                >
                  <v-card
                    outlined
                    tile
                    @click="item.link == '' ? null : open(item.link)"
                    class="panel flex d-flex flex-column"
                    :title="item.description"
                  >
                    <v-card-text>
                      <p class="ma-0 font-weight-black">
                        {{ item.name }}
                      </p>
                      <p class="ma-0 flex">
                        {{ item.description }}
                      </p>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
      <v-col
        class="text-center white--text"
        style="background-color: rgba(0,0,0,.2);"
        cols="12"
      >
        ©{{ new Date().getFullYear() }}
        <a href="https://idealclover.top" class="white--text" target="_blank"
          >idealclover</a
        >
      </v-col>
      <v-snackbar v-model="snackbar">
        {{ snackText }}
        <v-btn color="pink" text @click="snackbar = false">
          Close
        </v-btn>
      </v-snackbar>
    </v-content>
  </v-app>
</template>

<script>
const axios = require("axios");
import createPersiste from "vue-savedata";
import Clipboard from "clipboard";
import Vue from "vue";
import Vuex from "vuex";

const dataUrl = "https://image.idealclover.cn/projects/Life-in-NJU/";
const imgUrl = dataUrl + "background/bg" + Math.floor(Math.random() * 10) + ".jpg";

new Clipboard(".shareLink");
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    engineIndex: 0
  },
  mutations: {
    changeEngineIndex(state, num) {
      state.engineIndex = num;
    }
  },
  plugins: [createPersiste()]
});

export default {
  name: "App",
  mounted() {
    axios.get("./data.json").then(response => (this.data = response.data));
  },
  data: () => ({
    data: null,
    value: "",
    dataUrl: dataUrl,
    imgUrl: imgUrl,
    snackbar: false,
    snackText: "",
    engineIndex: store.state.engineIndex,
    engineList: [
      {
        name: "baidu",
        url: "https://www.baidu.com/s?wd=",
        src: dataUrl + "search/baidu-white.png"
      },
      {
        name: "google",
        url: "https://www.google.com/search?q=",
        src: dataUrl + "search/google-white.png"
      }
    ]
  }),
  methods: {
    open: function(link) {
      // window.location.href = link;
      window.open(link);
    },
    search: function() {
      let value = this.value;
      this.value = "";
      this.open(this.engineList[this.engineIndex]["url"] + value);
    },
    changeEngine: function() {
      this.engineIndex = (this.engineIndex + 1) % this.engineList.length;
      store.commit("changeEngineIndex", this.engineIndex);
    },
    showToast: function(text) {
      this.snackText = text;
      this.snackbar = true;
    }
  }
};
</script>

<style>
#web_bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-position: center 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  /* 兼容Webkit内核浏览器如Chrome和Safari */
  -webkit-background-size: cover;
  /* 兼容Opera */
  -o-background-size: cover;
  zoom: 1;
}
.logo-item {
  width: 210px;
  height: 70px;
}
.panels,
.panel {
  background: rgba(255, 255, 255, 0.7) !important;
}
</style>
