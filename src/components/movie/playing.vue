<template>
    <div class="movie_body" ref="movie_body">
        <loading v-if="isLoading"></loading>
        <scroller v-else :handle-to-scroll="handleToScroll" :handle-to-touch-end="handleToTouchEnd">
            <ul>
                <li class="pullDown">{{ pullDownMsg }}</li>
                <li v-for="item in movieList" :key="item.id">
                    <!--渲染属性变量src,先绑定再直接赋值，不能使用{{ value }}来赋值， 同时图片url里面w.h需要设置，
                    这里直接用过滤器来整体实现-->
                    <div class="pic_show" @tap="handleToDetail"><img :src="item.img | setWH('128.180')"></div>
                    <div class="info_list">
                        <h2 @tap="handleToDetail">{{ item.nm }}<img v-if="item.version === 'v3d imax'" src="@/assets/maxs.png" alt=""></h2>
                        <p>观众评分：<span class="grade">{{ item.sc }}</span></p>
                        <p>主演: {{ item.star }}</p>
                        <p>{{ item.showInfo }}</p>
                    </div>
                    <div class="btn_mall">
                        购票
                    </div>
                </li>
            </ul>
        </scroller>
    </div>
</template>

<script>
    // import BScroll from 'better-scroll'
    export default {
        name: "playing",
        data(){
            return {
                movieList: [],
                pullDownMsg: '',
                isLoading: true,
                preCityId: -1
            }
        },
        activated() { //mounted在keep-alive时候只触发一次， activeted一进入页面就触发
            var cityId = this.$store.state.city.id; //共享数据城市id, preCityId作为切换城市发起ajax请求的标记
            //切换城市时候重新发起ajax请求， 其他时候应该利用keep-alive的缓存无须再次发起ajax请求，向下执行
            if(this.preCityId === cityId){ return ;} //没有切换城市不用往下进行，发起请求，直接使用keep-alive的缓存
            this.isLoading = true   //城市已经切换，重新发起请求
            this.axios.get('/api/movieOnInfoList?cityId='+cityId).then((res)=>{
                var msg = res.data.msg
                if(msg === 'ok'){
                    this.movieList = res.data.data.movieList;
                    this.isLoading = false;
                    this.preCityId = cityId;     //页面刷新时候，整体会重新渲染，此时preCityId会恢复成原始值
                    /*this.$nextTick(()=>{
                        var scroll = new BScroll(this.$refs.movie_body, {
                            tap: true,
                            probeType: 1
                            //当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；
                            // 当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；
                            // 当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件
                        });
                        scroll.on('scroll', (pos)=>{
                            if(pos.y > 30){
                                this.pullDownMsg = '正在加载中'
                            }
                        });
                        scroll.on('touchEnd', (pos)=>{
                            if(pos.y > 30){
                                this.axios.get('/api/movieOnInfoList?cityId=11').then((res)=>{
                                    var msg = res.data.msg
                                    if(msg === 'ok') {
                                        this.pullDownMsg = '更新成功';
                                        setTimeout(()=>{
                                            this.movieList = res.data.data.movieList;
                                            this.pullDownMsg = '';
                                        }, 1000)
                                    }
                                })
                            }
                        })
                    })*/
                }
            })
        },
        methods:{
            handleToDetail(){
                console.log('handleToDetail')
            },
            handleToScroll(pos){
                if(pos.y > 30){
                    this.pullDownMsg = '正在加载中'
                }
            },
            handleToTouchEnd(pos){
                if(pos.y > 30){
                    this.axios.get('/api/movieOnInfoList?cityId=11').then((res)=>{
                        var msg = res.data.msg
                        if(msg === 'ok') {
                            this.pullDownMsg = '更新成功';
                            setTimeout(()=>{
                                this.movieList = res.data.data.movieList;
                                this.pullDownMsg = '';
                            }, 1000)
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .movie_body{ flex:1; overflow:auto;}
    .movie_body ul{ margin:0 12px; overflow: hidden;}
    .movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
    .movie_body .pic_show{ width:64px; height: 90px;}
    .movie_body .pic_show img{ width:100%;}
    .movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
    .movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
    .movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
    .movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
    .movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
    .movie_body .btn_mall { width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
    .movie_body .pullDown { margin: 0px; padding: 0px; border: none;}
</style>