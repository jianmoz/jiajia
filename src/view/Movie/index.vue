<template>
    <div id="main">
        <headerComponent title="佳佳电影"></headerComponent>
            <div id="content">
                <div class="movie_menu">
                    <router-link tag="div" to="/movie/city" class="city_name">
                        <span>{{ $store.state.city.nm }}</span><i class="iconfont icon-lower-triangle"></i>
                    </router-link>
                    <div class="hot_switch">
                        <router-link tag="div" to="/movie/playing" class="hot_item">正在热映</router-link>
                        <router-link tag="div" to="/movie/coming" class="hot_item">即将上映</router-link>
                    </div>
                    <router-link tag="div" to="/movie/search" class="search_entry">
                        <i class="iconfont icon-sousuo"></i>
                    </router-link>
                </div>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
            <!-- /#content -->
        <footerComponent></footerComponent>
    </div>
</template>

<script>
    import headerComponent from "../../components/headerComponent"
    import footerComponent from "../../components/footerComponent"
    import { messageBox } from "@/components/JS"
    export default {
        name: 'movieComponent',
        components: {
            headerComponent,
            footerComponent
        },
        mounted() {
            //只在页面渲染一次，防止切换之后城市非本地反复发起弹框，所以这里不要activited
            setTimeout(()=>{
                this.axios.get('/api/getLocation').then((res)=>{
                    var msg = res.data.msg;
                    if( msg == 'ok'){
                        var nm = res.data.data.nm;
                        var id = res.data.data.id;
                        //ajax请求城市成功后，如果发现当前城市和接口返回的城市不一样，进行弹框切换城市
                        if(this.$store.state.city.id == id){return ;}  //直接进行转换后的值比较，类型可能一个是字符串一个是number
                        messageBox({ //传入配置，对弹窗组件进行相应的初始化
                            title: '定位',
                            content: nm,
                            cancel: '取消',
                            ok: '切换定位',
                            // handleCancel: function () {  //取消按钮默认处理即可
                            // },
                            handleOk(){ //简写
                                window.localStorage.setItem('nowNm', nm);
                                window.localStorage.setItem('nowId', id);
                                window.location.reload(); //切换之后刷新页面
                            }
                        })
                    }
                })
            }, 2000)
        }
    }
</script>

<style scoped>
    #content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
    .movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
    .movie_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .city_name.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .hot_switch{ display: flex; height:100%; line-height: 45px;}
    .movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
    .movie_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .hot_item.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
    .movie_menu .search_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .search_entry.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .search_entry i{  font-size:24px; color:red;}
</style>
