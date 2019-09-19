<template>
    <div>
        <div>个人中心:</div>
        <div>当前用户: {{ $store.state.user.username }} <a href="javascript:;" @touchstart="handleToLogout">退出</a></div>
        <div v-if="$store.state.user.isAdmin">用户身份: 管理员 <a href="/admin" target="_blank">进入管理后台</a></div>
        <div v-else>用户身份: 普通会员</div>
        <div>
            <input type="file" name="file" value="上传头像" @change="handleToUpload">
            <img class="userHead" :src="$store.state.user.userHead+'?t=' + (new Date().getTime())" alt="">
        </div>
    </div>
</template>

<script>
    import { messageBox } from "../../components/JS";
    import axios from 'axios'
    export default {
        name: "center",
        methods: {
            handleToLogout(){
                this.axios.get('/api2/users/logout').then((res)=>{
                    var status = res.data.status;
                    if( status === 0){
                        window.localStorage.removeItem('username');
                        window.localStorage.removeItem('isAdmin');
                        window.localStorage.removeItem('userHead');
                        this.$store.commit('user/USER_INFO', { username: '', isAdmin: false, userHead: ''})
                        this.$router.push('/mine/login');
                    }
                })
            },
            handleToUpload(ev){
                var file = ev.target.files[0]; //拿到上传文件的第一个
                var param = new FormData();
                param.append('file',file, file.name); // k值，value, 文件名,以键值对方式放到post请求的body参数里面

                var config = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                };
                this.axios.post('/api2/users/uploadUserHead', param,config).then((res)=>{
                    var status = res.data.status;
                    var This = this;
                    if( status === 0){
                        messageBox({
                            title: '信息',
                            content: '上传头像成功',
                            ok: '确定',
                            handleOk(){
                                var imgUrl = res.data.data.userHead+'?'+Math.random();
                                window.localStorage.setItem('userHead', imgUrl);
                                This.$store.commit('user/USER_INFO', {
                                    userHead: imgUrl
                                });
                            }
                        });
                    }else {
                        messageBox({
                            title: '信息',
                            content: '上传头像失败',
                            ok: '确定'
                        })
                    }
                })
            }
        },
        beforeRouteEnter(to, from, next){
            axios.get('/api2/users/getUser').then((res)=>{
                var status = res.data.status;
                if( status === 0){
                    next(vm => {
                        window.localStorage.setItem('username', res.data.data.username);
                        window.localStorage.setItem('isAdmin', res.data.data.isAdmin);
                        window.localStorage.setItem('userHead', res.data.data.userHead);
                        vm.$store.commit('user/USER_INFO', {
                            username: res.data.data.username,
                            isAdmin: res.data.data.isAdmin,
                            userHead: res.data.data.userHead
                        });
                    });
                }else {
                    next('/mine/login');
                }
            })
        }
    }
</script>

<style scoped>
.userHead {
    width: 100px;height: 100px;
    border-radius: 50%;
    overflow: hidden;
}
</style>