<template>
    <div id="main">
        <headerComponent title="附近影院"></headerComponent>
        <div id="content">
            <div class="cinema_menu">
                <router-link tag="div" to="/cinema/region" class="region_switch">
                    全城 <i class="iconfont icon-lower-triangle"></i>
                </router-link>
                <router-link tag="div" to="/cinema/brand" class="brand_switch">
                    品牌 <i class="iconfont icon-lower-triangle"></i>
                </router-link>
                <router-link tag="div" to="/cinema/feature" class="feature_switch">
                    特色 <i class="iconfont icon-lower-triangle"></i>
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
    import headerComponent from "../../components/headerComponent";
    import footerComponent from "../../components/footerComponent";
    export default {
        name: 'cinemaComponent',
        components: {
            headerComponent,
            footerComponent,
        }
    }
</script>

<style scoped>
    #content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
    .cinema_menu .region_switch{ margin-right:20px; height:100%; line-height: 45px;}
    .cinema_menu .region_switch.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .cinema_menu .region_switch.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .cinema_menu .brand_switch{ margin-right:20px; height:100%; line-height: 45px;}
    .cinema_menu .brand_switch.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .cinema_menu .brand_switch.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .cinema_menu .feature_switch{ margin-right:20px; height:100%; line-height: 45px;}
    .cinema_menu .feature_switch.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .cinema_menu .feature_switch.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
</style>