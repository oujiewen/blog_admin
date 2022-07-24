<template>
    <div class="login_view">
        <LoginForm></LoginForm>    
    </div>

</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    import LoginForm from './/components/LoginForm.vue';
    
    
    export default defineComponent({
      name: 'LoginView',
      components: {
        LoginForm,
      },
    });
    </script>
<style lang="scss">
    .login_view{
        position: absolute;
        height: 100%;
        width: 100%;
        background-image:url("../../assets/login_bg.jpg");
        background-size: 100% 100%;
    }
    LoginForm{
        position:relative;
        left: 30%;
        top:50%;
    }
</style>