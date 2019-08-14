<template>
  <div>
    <h6 style="padding:6px 0;">
      Brands 品牌名称
      <a :href="url" target="_blank">
        <el-button
          v-if="url"
          style="zoom:0.7"
          size="mini"
          type="primary"
          icon="el-icon-caret-right"
          round
        >{{ url_text }}</el-button>
      </a>
    </h6>
    <el-autocomplete
      popper-class="my-autocomplete"
      v-model="state"
      :fetch-suggestions="querySearch"
      placeholder="请输入品牌名称"
      @select="handleSelect"
      @clear = "$emit('state',null)"
      style="width:100%; "
      clearable
    >
    <!-- :autofocus="true" -->
      <!-- <i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick"></i> -->
      <template slot-scope="{ item }" >
        <div class="flex_center">
          <img :src="item.brand_logo_base64" width="140" alt />
          <div class="name">{{ item.name }}</div>
        </div>
      </template>
    </el-autocomplete>
  </div>
</template>

<script>
// import orangeshineBrands from "../data-json/orangeshineBrands.json";
import orangeshineBrands from "../data-json/orangeshineBrandsLocal.json";

export default {
  name: "BrandsName",
  props: {
    msg: String
  },
  data() {
    return {
      restaurants: [],
      state: "",
      orangeshineBrandsData: [],
      url: "",
      url_text: ""
    };
  },
  created() {
    // let newArr = [];
    // let arr = orangeshineBrands.data.brands;
    // newArr.sort((a, b) => {
    //   return a.name.localeCompare(b.name);
    // });
    // console.log(newArr);
    this.orangeshineBrandsData = orangeshineBrands;
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    loadAll() {
      return this.orangeshineBrandsData;
    },
    handleSelect(item) {
      console.log(item);
      this.state = item.name;
      this.url = "https://www.orangeshine.com" + item.url;
      this.url_text = item.name;
      this.$emit("state",item);

    },
    handleIconClick(ev) {
      console.log(ev);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  watch: {
    // state: function(val, oldVal) {
    //   this.$emit("state",this.state);
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.flex_center {
  display: flex;
  align-items: center;
  padding: 10px 0;
}
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}
</style>
