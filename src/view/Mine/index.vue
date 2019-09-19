<template>
    <div id="main">
        <headerComponent title="我的佳佳"></headerComponent>
        <div id="content">
            <router-view></router-view>
        </div>
        <!-- /#content -->
        <footerComponent></footerComponent>
    </div>
</template>

<script>
    import headerComponent from "../../components/headerComponent"
    import footerComponent from "../../components/footerComponent"
    import loginComponent from "../../components/login";
    export default {
        name: 'mineComponent',
        components: {
            headerComponent,
            footerComponent,
            loginComponent
        }
    }
</script>

<style scoped>

</style>
