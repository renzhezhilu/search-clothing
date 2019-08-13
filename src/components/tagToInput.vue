<template>
  <div>
    <h6 style="padding:6px 0;">
      {{ title }}
    </h6>
    <el-input @change="getData()" placeholder="编号" v-model="state" clearable></el-input>
    
    <ul class="tag_box" v-if="search_con_box">
      <el-tag size="mini">超小标签</el-tag>
      <el-tag size="mini">超小标签</el-tag>
      <el-tag size="mini">超小标签</el-tag>
      <el-tag size="mini">超小标签</el-tag>
      <el-tag size="mini">超小标签</el-tag>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: "tagToInput",
  props: {
    title: String
  },
  data() {
    return {
      state: "",
      allData:null,
      orangeshineSearchData: [],
      url: "",
      url_text: "",
      loading: true,
      search_con_box: false
    };
  },
  created() {},
  methods: {
    getData() {
      console.log(1111);
      this.loading = true;
      this.search_con_box = true;
      this.$http({
        url: `http://127.0.0.1:7719/orangeshine/search?q=${this.state}`
      }).then(response => {
        this.allData = response.data
        this.orangeshineSearchData = response.data.data.styles;
        console.log(this.orangeshineSearchData);
        this.loading = false;
      });
    },
    handleSelect(item) {
      console.log(item);
      this.state = item.name;
      this.url = "https://www.orangeshine.com" + item.url;
      this.url_text = item.name;
    },
    handleIconClick(ev) {
      console.log(ev);
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search_con_box {
  background-color: #fff;
  border-radius: 6px;
  padding: 4px;
  max-height: 300px;
  min-height: 50px;
  overflow: auto;
  li {
    a {
      display: flex;
      align-items: center;
      padding: 4px;
    }
    img {
      padding: 4px;
      width: 70px;
    }
    h6 {
      font-size: 9px;
      opacity: 0.6;
    }
  }
  li:hover {
    background-color: rgb(210, 232, 254);
  }
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
