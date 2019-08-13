<template>
  <div>
    <h6 style="padding:6px 0;">
      Style Number 编号
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
    <el-input @change="getData()" placeholder="编号" v-model="state" clearable></el-input>
    
    <ul class="search_con_box" v-if="search_con_box" v-loading="loading">
      <h5 >
      {{ allData.data.all }} 个结果
      </h5>
      <li v-for="item in orangeshineSearchData">
        <a 
          :href="'https://www.orangeshine.com'+ item.url.replace(/styles/,'style')" 
          target="_blank"
        >
          <img :src="item.image" />
          <div>
            <p>{{ item.style_number }}</p>
            <h6>
              <a
                :href="'https://www.orangeshine.com'+item.brand.url"
                target="_blank"
              >{{ item.brand.name }}</a>
            </h6>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "styleNumber",
  props: {
    msg: String
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
  created() {
    this.getData()
  },
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
      })
    },
  },
  mounted() {},
  watch: {
    state: function(val, oldVal) {
      this.$emit("state",val);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search_con_box {
  background-color: #fff;
  border-radius: 6px;
  padding: 4px;
  max-height: 500px;
  min-height: 50px;
  overflow: auto;
  li {
    
    img {
      padding: 4px;
      width: 150px;
    }
    h6 {
      font-size: 9px;
      opacity: 0.6;
    }
  }
  li>a {
      display: block;
      float: left;
      text-align: center;
      padding: 10px;
    }
  li>a:hover {
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
