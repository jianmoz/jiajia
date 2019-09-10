<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
    <!-- /#wrapper -->
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "scroller",
        //better-scroll事件通过prop的属性来实现，父组件向子组件传递消息
        props: {
            handleToScroll: {
                type: Function,
                default: function () {}
            },
            handleToTouchEnd: {
                type: Function,
                default: function () {}
            }
        },
        mounted() {
            var scroll = new BScroll(this.$refs.wrapper,{
                tap: true,
                probeType: 1
            });

            this.scroll = scroll;

            scroll.on('scroll', (pos)=>{
                this.handleToScroll(pos)       //回调出去
            });
            scroll.on('touchEnd', (pos)=>{
                this.handleToTouchEnd(pos)       //回调出去
            })
        },
        methods: {
            toScrollTop(y){
                this.scroll.scrollTo(0, y)
            }
        }
    }
</script>

<style scoped>
.wrapper { height: 100% }
</style>