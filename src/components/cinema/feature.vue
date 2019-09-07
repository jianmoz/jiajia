<template>
    <div class="feature_body">
        <div class="feature_list">
            <ul>
                <li>IMAX厅</li>
                <li>DMAX</li>
                <li>VIP厅</li>
                <li>DTS临境音</li>
                <li>4K厅</li>
                <li>巨幕厅</li>
                <li>激光厅</li>
                <li>可停车</li>
                <li>观影小食</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "feature_body"
    }
</script>

<style scoped>
    .feature_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
    .feature_body .feature_list { flex:1; overflow: auto; background: #FFF5F0;}
    .feature_body .feature_list::-webkit-scrollbar{
        background-color:transparent;
        width:0;
    }
    .feature_body .feature_list ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px;
        margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px;  line-height: 33px; text-align: center; box-sizing: border-box;}

</style>