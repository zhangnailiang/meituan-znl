<template>
  <div>
    <span class="name">按省份新选择</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeshengfen"
      className="province"
    ></m-select>
    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changechengshi"
      :disabled = "cityDisabled"
      className="city"
    ></m-select>
    <span>直接搜索:</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>
<script>
import api from '@/api/index.js';
import MSelect from "./select.vue";
export default {
  data() {
    return {
      provinceList: [],
      province: "省份",
      cityList: [],
      city: "城市",
      cityActive: false,
      provinceActive: false,
      searchList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"],
      searchWord: '',
      cityDisabled: true,
    };
  },
  created  () {
    api.getProvinceList ().then(res => {
        this.provinceList = res.data.data.map ((item) => {
          item.name = item.provinceName;
          return item;
        });
        console.log (this.provinceList);

    });
           
  },
  components: {
    MSelect
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag == true) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag == true) {
        this.provinceActive = false;
      }
    },
    remoteMethod (val) { 
        //请求后端接口

    },
    changeshengfen (item) {
      this.province = item.name;
      console.log (item);
      this.cityDisabled = false;
      this.cityList = item.cityInfoList;


    },
    changechengshi (item) {
      this.city = item.name;
      console.log (item);
      this.$store.dispatch ('setPosition', item);
      this.$router.push ({name: 'index'});
      // this.cityList = item.
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>
