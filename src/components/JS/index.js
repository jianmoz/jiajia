// js组件集合页
import Vue from 'vue'
import MessageBox from './MessageBox'

export var messageBox = (function () {

    return function (opts) { //配置参数
        var defaults = { //默认值
            title: '',
            content: '',
            cancel: '',
            ok: '',
            handleCancel: null,
            handleOk: null
        };

        var MyComponent = Vue.extend(MessageBox);   //根据组件返回相应的组件类，将类和组件结合在一起, Vue的子类

        for(var attr in opts){
            defaults[attr] = opts[attr];
        }

        var vm = new MyComponent({
            el: document.createElement('div'), //作为容器，实际上因为有template选项，这个div会被template覆盖
            data: {
                title: defaults.title,
                content: defaults.content,
                cancel: defaults.cancel,
                ok: defaults.ok
            },
            methods:{
                handleCancel(){
                    // 如果没设置就不用管，设置了就执行后面，将对象this绑定到这个组件实例vm上
                    defaults.handleCancel && defaults.handleCancel.call(this);
                    document.body.removeChild(vm.$el) //点击后将整个组件从页面上去掉
                },
                handleOk(){
                    defaults.handleOk && defaults.handleOk.call(this);
                    document.body.removeChild(vm.$el)
                }
            }
        });

        document.body.appendChild(vm.$el);      //把组件实例添加到页面上
    };
})()