<template>
    <div class="region_body">
        <div class="region_list">
            <ul>
                <li>中山区</li>
                <li>西岗区</li>
                <li>沙河口区</li>
                <li>甘井子区</li>
                <li>旅顺口区</li>
                <li>金州区</li>
                <li>普兰店区</li>
                <li>长海县</li>
                <li>瓦房店市</li>
                <li>庄河市</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "region"
    }
</script>

<style scoped>
    .region_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
    .region_body .region_list { flex:1; overflow: auto; background: #FFF5F0;}
    .region_body .region_list::-webkit-scrollbar{
        background-color:transparent;
        width:0;
    }
    .region_body .region_list ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px;
        margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px;  line-height: 33px; text-align: center; box-sizing: border-box;}

</style>