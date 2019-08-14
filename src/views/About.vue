<template>
  <div class="home">
    <el-row>
      <!-- 内容区 -->
      <el-col :span="24">
        <div class="search search01">
          <div class="content_box">
            <!--  -->
            <div class="content_li" style="width:100%;">
              <BrandsName v-on:state="jieguo = $event"></BrandsName>
            </div>
          </div>
        </div>
        <div class="search search02" v-if="jieguo">
          <img :src="jieguo.brand_logo_base64"  />
          <h1> {{ jieguo.name + ward01 }}</h1>
          <ul>
            <li>
              <h2>{{ jieguo.all }} 件</h2>
              <p>产品</p>
            </li>
          </ul>
          <ul>
            <li>
              <h5>{{ jieguo.email }}</h5>
              <p>email</p>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import BrandsName from "@/components/BrandsName.vue";

export default {
  name: "home",
  components: {
    BrandsName
  },
  data() {
    return {
      ward01: "",

      jieguo: {
        id: "584",
        name: "/",
        web_name: "/",
        url: "/",
        brand_logo: "/",
        brand_image: "/",
        newly_joined: false,
        brand_logo_base64: "/",
        email: "/",
        phone: "/",
        all: "/"
      }
    };
  },
  created(){
    this.jieguo = null
  },
  methods: {
    retColor(cn, en) {
      if (cn.includes("#")) {
        return `background-color:${en};color:#333`;
      } else {
        return `background-color:${en};color:#fff`;
      }
    }
  },
  computed: {
    go_google: function() {
      if (
        !this.ward01 &&
        !this.ward02 &&
        !this.ward03 &&
        !this.ward04 &&
        !this.ward05 &&
        !this.ward06 &&
        !this.ward07 &&
        !this.ward08 &&
        !this.ward09 &&
        !this.ward10
      ) {
        return null;
      } else {
        return (
          this.ward01 +
          " " +
          this.ward02 +
          " " +
          this.ward03 +
          " " +
          this.ward04 +
          " " +
          this.ward05 +
          " " +
          this.ward06 +
          " " +
          this.ward07 +
          " " +
          this.ward08 +
          " " +
          this.ward09 +
          " " +
          this.ward10
        );
      }
    },
    go_google_url: function() {
      return `https://www.google.com.hk/search?q=${this.go_google}&newwindow=1&safe=strict&source=lnms&tbm=isch`;
    }
  }
};
</script>

<style scoped lang="scss">
.el-input__inner {
  height: 120px;
  line-height: 120px;
}
.search {
  background-color: #eee;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  border-left: 5px solid #409eff;
}
.search01 {
  background-color: #eee;
  border-left: 5px solid #67c23a;
}
.search02 {
  background-color: #eee;
  text-align: center;
  border-left: 5px solid #409eff;
  padding: 20px 10px;
}
.content_box {
  display: flex;
}
.content_li {
  flex: 1;
  margin: 4px;
}
.opacity05 {
  opacity: 0.4;
}
h1 {
  font-size: 16px; line-height: 46px;
}
ul {
  display: flex;
  padding: 5px 0;
  li {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    p {
      font-size: 18px;
      opacity: 0.6;
      font-weight: 100;
    }
    h2 {
      font-size: 36px;
      font-weight: 900;
      color: #409eff;
    }
  }
}
</style>
