<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{ nav.title }}</dt>
      <dd 
            v-for="(item, index) in nav.list" 
            :key="index" 
            :class="{active: kind == item.tab}" 
            :data-type="item.tab"
            >{{ item.text }}</dd>
    </dl>
    <ul class="ibody">
        <li v-for="(item, index) in resultData[kind]" :key="index">
            <el-card :body-style="{ padding: '0px' }" shadow="rever">
            <img
                :src="item.image"
                class="image"
            >
            <div class="cbody">
                <div class="title" :title="item.title"> {{ item.title}}</div>
                <div class="sub-title" :title="item.sub_title">{{ item.sub_title }}</div>
                <div class="price-info">
                    <span class="current-price-wrapper">
                        <span class="price-symbol numfont">¥</span>
                        <span class="current-price numfont">{{ item.price  }}</span>
                        <span class="sold bottom-right-info">{{ item.address }}</span> 
                    </span>
                    <!-- <span class="old-price">门市价¥{{ item.price_info.old_price }}</span>
                    -->
                </div>
                <!-- <div class="price-info" v-else-if="!item.rentNum">
                    <span class="current-price-wrapper">
                        <span class="price-symbol numfont">¥</span>
                        <span class="current-price numfont">抢光了</span>
                    </span>
                </div>
                <div class="price-info" v-else-if="!item.rentNum">
                    <span class="current-price-wrapper">
                        <span class="price-symbol numfont">¥</span>
                        <span class="current-price numfont">抢光了</span>
                    </span>
                </div> -->
                
          </div>
        </el-card>
      </li>
    </ul>
  </div> 
</template>
<script>
import api from '@/api/index.js';
export default {
    data () {
        return {
            resultData: {},
            kind: 'all',
            list: [{
                image: '//p1.meituan.net/msmerchant/a316aecb8e8db3a2dda8e7d7f93137a41454100.jpg@460w_260h_1e_1c',
                title: '必胜客（宣化店）',
                sub_title: '【周五半价】西班牙风情海鲜意面1份',
                price_info: {
                    current_price: 19.5,
                    old_price: 39,
                    avg_price: null,
                },
                rentNum: 0,
                address: '芦家街/宣化街',
            }, {
                image: '//p1.meituan.net/deal/__43042276__9387654.jpg@460w_260h_1e_1c',
                title: '金美乐艺术蛋糕', 
                sub_title: '8英寸欧式水果生日蛋糕→率先推出蛋糕店免费送货贴心服务,同城4公里可免费配送到家1个，约8英寸，圆',
                price_info: {
                    current_price: 78.8,
                    old_price: 128,
                },
                rentNum: 0,
                address: '国际会展中心',
            }, {
                image: '//p0.meituan.net/mogu/b74ca70aa1ee34f0b5db23ea1c7dab75108206.jpg@460w_260h_1e_1c',
                title: '幸福满满咖啡蛋糕店（果戈里店）',
                sub_title: '蛋糕2选1,约8英寸，圆形',
                price_info: {
                    current_price: 118,
                    old_price: 198,
                },
                address: '芦家街/宣化街',
            }]
        }
    }, 
    props: [
        'nav',
    ],
    created () {
        // this.kind = "all";
        api.resultsByKeywords().then ((res) => {
            console.log (res);
            this.resultData = res.data.data;
        })
    },
    methods: {
        over (e) {
            let dom = e.target;
            
            let tagName = dom.tagName.toLowerCase();
            if (tagName != 'dd') {
                return false;
            }
                
            this.kind = dom.getAttribute ('data-type');
            //动态获取数据  ajax
        },
        
    }
}
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
