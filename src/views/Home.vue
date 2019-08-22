<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <router-link tag="a" to="/about">go about</router-link> -->

    <el-row>
      <!-- 菜单区 -->
      <!-- <el-col :span="2"> -->
        <!-- <div class="grid-content bg-purple-dark">菜单01</div> -->
      <!-- </el-col> -->
      <!-- 内容区 -->
      <el-col :span="24">
        <div class="search search01">
          <!-- <h4>
            <i class="el-icon-search"></i>
            常规搜索
          </h4> -->
          <div class="go_google">
            <h1>
              {{  go_google }}
            </h1>
            <el-button 
              @click="openGoogle()" type="success" :disabled="!go_google?true:false" size="small" round>
              Google!
            </el-button>
          </div>
        </div>
        <div class="search search02">
          
          <div class="content_box">
            <!--  -->
            <div class="content_li" style="min-width:300px;">
              <BrandsName v-on:state="ward01=$event.name"></BrandsName>
            </div>
            <!--  -->
            <div class="content_li" style="min-width:350px;">
              <styleNumber v-on:state="ward02=$event"></styleNumber>
            </div>
            <!--  -->
            <div class="content_li">
              <h6 style="padding:6px 0;">Type 类型</h6>
              <el-input placeholder="编号" v-model="ward03" clearable></el-input>
              <ul class="tag_box">
                <el-tooltip placement="left" v-for="item in typeArr" effect="light">
                  <div slot="content">
                    <img v-for="itt in item.img" :src="itt"  height="160" />
                  </div>
                  <el-tag
                    size="small"
                    @click="ward03=item.en"
                    :type="item.en.toLowerCase()==ward03.toLowerCase()?'success':''"
                    :effect="item.en.toLowerCase()==ward03.toLowerCase()?'dark':'light'"
                  >{{ item.en + '/' +item.cn }}</el-tag>
                </el-tooltip>
              </ul>
            </div>
            <!--  -->
            <div class="content_li">
              <h6 style="padding:6px 0;">View 外观特点</h6>
              <el-input placeholder="编号" v-model="ward04" clearable></el-input>
              <ul class="tag_box">
                <el-tooltip placement="left" v-for="item in viewArr" effect="light">
                  <div slot="content">
                    <img v-for="itt in item.img" :src="itt"  height="160" />
                  </div>
                  <el-tag
                    size="mini"
                    @click="ward04=item.en"
                    :type="item.en.toLowerCase()==ward04.toLowerCase()?'success':''"
                    :effect="item.en.toLowerCase()==ward04.toLowerCase()?'dark':'light'"
                  >{{ item.en + '/' +item.cn }}</el-tag>
                </el-tooltip>
              </ul>
            </div>
             <!--  -->
            <div class="content_li">
              <h6 style="padding:6px 0;">Color 颜色</h6>
              <el-input placeholder="颜色" v-model="ward05" clearable></el-input>
              <ul class="tag_box">
                <el-tooltip placement="left" v-for="item in colorArr" effect="light" disabled>
                  <!-- <div slot="content">
                    <img v-for="itt in item.img" :src="itt"  height="160" />
                  </div> -->
                  <el-tag
                    size=""
                    :style="retColor(item.cn,item.en)"
                    @click="ward05=item.en"
                    :class="item.en.toLowerCase()==ward05.toLowerCase()?'':'opacity05'"

                  >{{ item.en + '/' +item.cn }}</el-tag>
                </el-tooltip>
              </ul>
            </div>
            
            <!--  -->
            <div class="content_li">
              <h6 style="padding:6px 0;">Feel 手感</h6>
              <el-input placeholder="编号" v-model="ward06" clearable></el-input>
              <ul class="tag_box">
                <el-tooltip placement="left" v-for="item in feelArr" effect="light">
                  <div slot="content">
                    <img v-for="itt in item.img" :src="itt"  height="160" />
                  </div>
                  <el-tag
                    size="mini"
                    @click="ward06=item.en"
                    :type="item.en.toLowerCase()==ward06.toLowerCase()?'success':''"
                    :effect="item.en.toLowerCase()==ward06.toLowerCase()?'dark':'light'"
                  >{{ item.en + '/' +item.cn }}</el-tag>
                </el-tooltip>
              </ul>
            </div>
           
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import BrandsName from "@/components/BrandsName.vue";
import styleNumber from "@/components/styleNumber.vue";

import tagData from "../data-json/tab.js";

export default {
  name: "home",
  components: {
    BrandsName,
    styleNumber
  },
  data() {
    return {
      ward01: "",
      ward02: "",
      ward03: "",
      ward04: "",
      ward05: "",
      ward06: "",
      ward07: "",
      ward08: "",
      ward09: "",
      ward10: "",

      typeArr: tagData.typeArr,
      feelArr: tagData.feelArr,
      colorArr: tagData.colorArr,
      viewArr: tagData.viewArr,
      
    };
  },
  methods:{
    openGoogle(){
      window.open(this.go_google_url)
    },
    retColor(cn,en){
      if(cn.includes('#')){
        return `background-color:${en};color:#333`
      }
      else {
        return `background-color:${en};color:#fff`
      }
    }
  },
  computed : {
    go_google : function () {
      if(!this.ward01 && !this.ward02 && !this.ward03 && !this.ward04 && !this.ward05 && !this.ward06 && !this.ward07 && !this.ward08 && !this.ward09 && !this.ward10) {
        return null
      }
      else {
        return this.ward01 + ' ' + this.ward02 + ' ' + this.ward03 + ' ' + this.ward04 + ' ' + this.ward05 + ' ' + this.ward06 + ' ' + this.ward07 + ' ' + this.ward08 + ' ' + this.ward09 + ' ' + this.ward10
      }
    },
    go_google_url : function(){
      return `https://www.google.com.hk/search?q=${this.go_google}&newwindow=1&safe=strict&source=lnms&tbm=isch`
    }
  }
};
</script>

<style scoped lang="scss">
.go_google {
  padding: 10px;
  display: flex;
  h1 {
    min-width: 400px;
    color:#67c23a;
    font-size: 32px;
    padding-right: 15px;
  }
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
  border-left: 5px solid #409eff;
}
.content_box {
  display: flex;
}
.content_li {
  flex: 1;
  margin: 4px;
  max-width: 150px;
}
.opacity05 {
  opacity: .4;
}
</style>
