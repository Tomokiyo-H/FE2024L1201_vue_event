// JavaScript用ファイル
new Vue({
    el: '#app',
    data() {
        return {
            count:0
        };
    },
    methods:{
        increment(){
            this.count*2;
        },
        decrement(){
            this.count/2;
        },
        reset(){
            this.count=1;
        },
    }
});