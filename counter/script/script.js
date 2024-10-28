// JavaScript用ファイル
new Vue({
    el: '#app',
    data() {
        return {
            count:1,
            num:0
        };
    },
    methods:{
        increment(){
            this.count=this.count*2;
        },
        decrement(){
            this.count=this.count/2;
        },
        reset(){
            this.count=1;
        },
        add(){
            this.count=this.count+this.num;
        },
        decrease(){
            this.count=this.count-this.num;
        }
    }
});