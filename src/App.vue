<template>
  <v-app style="background: rgba(0,0,0,0);">
    <div id="web_bg" :style="'background-image: url(' + imgUrl + ');'"></div>
    <v-app-bar app color="rgba(0,0,0,.2)" dark flat fixed>
      <v-toolbar-title>Life In NJU</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon
        @click="open('https://github.com/idealclover/Life-in-NJU')"
        class="mx-3"
      >
        mdi-github
      </v-icon>
      <v-icon
        class="shareLink"
        data-clipboard-text="https://nju.today"
        @click="share"
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
            @click="nextEngine"
          ></v-img>
          <v-text-field
            flat
            solo
            class="mt-10"
            label="Search"
            v-model="value"
            append-icon="search"
            @click:append="search"
            @keyup.enter="search"
          ></v-text-field>
          <v-row
            class="mb-10"
            align="center"
            justify="center"
            id="searchOptBox"
          >
            <div class="text-center mx-4">
              <v-btn
                depressed
                rounded
                color="rgba(0,0,0,.2)"
                dark
                class="searchOpt"
                @click="changeEngine(0)"
              >
                <i class="iconfont" id="iconBaidu">&#xe6b6;</i>
              </v-btn>
            </div>
            <div class="text-center mx-4">
              <v-btn
                depressed
                rounded
                color="rgba(0,0,0,.2)"
                dark
                class="searchOpt"
                @click="changeEngine(1)"
              >
                <i class="iconfont" id="iconBing">&#xe63f;</i>
              </v-btn>
            </div>
            <div class="text-center mx-4">
              <v-btn
                depressed
                rounded
                color="rgba(0,0,0,.2)"
                dark
                class="searchOpt"
                @click="changeEngine(2)"
              >
                <i class="iconfont" id="iconGoogle">&#xe719;</i>
              </v-btn>
            </div>
          </v-row>
        </v-col>
      </v-container>
      <v-container style="flex: 1 1 auto">
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
                    @click="item.link === '' ? null : open(item.link)"
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
        style="background-color: rgba(0,0,0,.2); flex: 0 1 auto"
        cols="12"
      >
        ©{{ new Date().getFullYear() }}
        <a
          href="https://idealclover.top"
          class="white--text"
          target="_blank"
          rel="noopener noreferrer nofollow"
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
import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import createPersiste from "vue-savedata";
import NativeShare from "nativeshare";
import Clipboard from "clipboard";

const dataUrl = "https://image.idealclover.cn/projects/Life-in-NJU/";
const imgUrl =
  dataUrl + "background/bg" + Math.floor(Math.random() * 10) + ".jpg";

new Clipboard(".shareLink");
Vue.use(Vuex);
let nativeShare = new NativeShare();

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
        name: "bing",
        url: "https://cn.bing.com/search?q=",
        src: dataUrl + "search/bing-white.png"
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
      let tab = window.open(link);
      tab.opener = null;
      tab.location = link;
    },
    share: function() {
      nativeShare.setShareData({
        icon: "https://nju.today/img/icons/android-chrome-192x192.png",
        link: "https://nju.today",
        title: "南哪指南",
        desc: "南哪人的专属导航页！",
        from: "@idealclover"
      });

      // 唤起浏览器原生分享组件(如果在微信中不会唤起，此时call方法只会设置文案。类似setShareData)
      try {
        nativeShare.call();
      } catch (err) {
        this.showToast("链接已复制，快分享给小伙伴吧！");
      }
    },
    search: function() {
      let value = this.value;
      this.value = "";
      this.open(this.engineList[this.engineIndex]["url"] + value);
    },
    changeEngine: function(num) {
      this.engineIndex = num;
      store.commit("changeEngineIndex", num);
    },
    nextEngine: function() {
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
/*因为v-content无法操作slot的临时hack，可能需要修改布局*/
div[class="v-content__wrap"] {
  display: flex;
  flex-direction: column;
}
</style>
