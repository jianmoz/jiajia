<template>
    <div class="brand_body">
        <div class="brand_list">
            <ul>
                <li>全部</li>
                <li>SFC影城</li>
                <li>万达电影</li>
                <li>大地影院</li>
                <li>中影国际影城</li>
                <li>CGV</li>
                <li>橙天娱乐</li>
                <li>博纳影城</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "brand"
    }
</script>

<style scoped>
    .brand_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
    .brand_body .brand_list { flex:1; overflow: auto; background: #FFF5F0;}
    .brand_body .brand_list::-webkit-scrollbar{
        background-color:transparent;
        width:0;
    }
    .brand_body .brand_list ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px;
        margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px;  line-height: 33px; text-align: center; box-sizing: border-box;}

</style>