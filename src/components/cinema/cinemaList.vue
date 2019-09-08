<template>
    <div class="cinema_body">
        <ul>
            <li v-for="item in ciList" :key="item.id">
                <div>
                    <span>{{ item.nm }}</span>
                    <span class="q"><span class="price">{{ item.sellPrice }}</span> 元起</span>
                </div>
                <div class="address">
                    <span>{{ item.addr }}</span>
                    <span>{{ item.distance }}</span>
                </div>
                <!--item.tag的值是一个对象，遍历该对象，num是值, key是键名-->
                <div class="card">
                    <div v-for="(value, key) in item.tag" v-if="value === 1" :key="key" :class="key | classTag">
                        {{ key | formatTag }}
                    </div>
                    <div v-for="(value, key) in item.tag" v-if="key === 'hallType' ">
                        {{ value | hallFormat }}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "cinemaList",
        data(){
            return {
                ciList: []
            }
        },
        mounted() {
            this.axios.get('/api/cinemaList?cityId=10').then((res)=>{
                var msg = res.data.msg
                if(msg === 'ok'){
                    this.ciList = res.data.data.cinemas
                }
            })
        },
    //    设置电影院标签以及样式的过滤器，进行一一映射
        filters:{
            formatTag(key){
                var tagList = [
                    { key: 'allowRefund', value: '退票' },
                    { key: 'buyout', value: '3D眼镜收费' },
                    { key: 'sell', value: '正营业'},
                    { key: 'vipTag', value: '折扣卡' },
                    { key: 'snack', value: '观影小食' },
                    { key: 'cityCardTag', value: '影城卡' },
                    { key: 'deal', value: '改签' },
                    { key: 'endorse', value: '可停车' }
                ];
                for(var i=0; i< tagList.length; i++){
                    if(tagList[i].key === key){
                        return tagList[i].value;
                    }
                }
                return '';
            },
            hallFormat(value){
                return value[0]
            },
            classTag(key){
                var tagList = [
                    { key: 'allowRefund', value: 'bl' },
                    { key: 'buyout', value: 'bl' },
                    { key: 'sell', value: 'bl'},
                    { key: 'vipTag', value: 'or' },
                    { key: 'snack', value: 'or' },
                    { key: 'cityCardTag', value: 'bl' },
                    { key: 'deal', value: 'bl' },
                    { key: 'endorse', value: 'bl' }
                ];
                for(var i=0; i< tagList.length; i++){
                    if(tagList[i].key === key){
                        return tagList[i].value
                    }
                }
                return  ''
            }
        }
    }
</script>

<style scoped>
    .cinema_body{ flex:1; overflow:auto;}
    .cinema_body ul{ padding:20px;}
    .cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
    .cinema_body div{ margin-bottom: 10px;}
    .cinema_body .q{ font-size: 11px; color:#f03d37;}
    .cinema_body .price{ font-size: 18px;}
    .cinema_body .address{ font-size: 13px; color:#666;}
    .cinema_body .address span:nth-of-type(2){ float:right; }
    .cinema_body .card{ display: flex;}
    .cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
    .cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
    .cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}
</style>