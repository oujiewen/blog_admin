<template>
    <div class="login">
            <div class='div_title'>
                <p class="p_title">博客管理后台</p>
            </div>

            <div class='div_input'>
                <input type="text" name="username" placeholder="请输入用户名">
            </div>

            <div class='div_input'>
                <input type="password" name="password" placeholder="请输入密码">
            </div>

            <div class="div_p">
            <label></label>
            </div>

            <div class='div_btn'>
                <button class="btn" id='login' type="sumit" v-on:click="login">登录</button>
            </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import axios from 'axios'

    export default defineComponent({
    name: 'LoginForm',
    methods:{
        login:function(){
            this.$http.get('/test/blog/getHotArticl/',{

            }).then((response)=>{
                alert(response.data)
            })
            alert('login.....')
        }
    }
    }); 
</script>
<style type="scss">
    .login{                                 
	position: fixed;
	width: 450px;
	height: 450px;
    bottom: 20%;
    right: 10%;
	/* margin: 25% 70%; */
	border-radius:15px;
    /* transform: translate(-225px, -225px); */
/*    background-image: url('../../static/img/bg_pop1.png');
    background-size: 100% 100%;*/
    border-radius: 10px;
    box-shadow: 1px 1px 12px hsla(0,0%,60%,.2), -1px -1px 12px hsla(0,0%,60%,.2)
    }
    .div_title{
        width: 250px;
        height: 80px;
        margin: 55px auto 0px;
        font-size: 0px;
    }
    .div_input{
        width: 250px;
        height: 50px;
        margin: 20px auto 0px;
        font-size: 0px;
        line-height: 0px;
    }
    .div_p{
        width: 250px;
        height: 20px;
        margin: 2px auto 2px;
    }
    .div_btn{
        width: 250px;
        height: 50px;
        margin: 0px auto 0px;
        font-size: 20px;
    }



    .p_title{
        font-size: 25px;
        text-align: center;
        line-height: 80px;
    }
    .P_erro{
        line-height: 0px;
        text-align: center;
        background-color: green;
    }

    input{
        padding-left: 10px;
    border-radius:15px;
    background-color: green;
    width: 246px;
    height: 44px;
    line-height: 44x;
    border: none;
    outline: none;
    background-color: #F2F2F2;
    }

    button{
    width: 250px;
    height: 50px;
    line-height: 44x;
    border-radius:50px;
    background-color: #282b33;
    outline: none;
    border: none;
    font-size: 18px;
    color: #fff;
    }
    label{
        font-size: 14px;
        float: right;
        color: red;
    }
    .clearfix:before{
        content: "";
        display: table;
    }
        button:hover{
            background-color: #333;
        }


    /*#登录框*/
</style>