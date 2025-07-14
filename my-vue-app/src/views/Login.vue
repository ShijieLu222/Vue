<template>
    <div style="max-width: 300px;margin: 40px auto;">
        <p>请输入用户名和密码进行登录。</p>
        <a-form>
            <a-form-item>
                <a-input v-model:value="formState.username" placeholder="用户名"></a-input>
            </a-form-item>
            <a-form-item>
                <a-input-password v-model:value="formState.password" placeholder="密码" />
            </a-form-item>
            <a-form-item>
                <a-button type="primary" html-type="submit" block @click="onFinish">登录</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router'; // 1. 引入 useRouter

const router = useRouter(); // 2. 获取 router 实例

const formState = reactive({
    username: '',
    password: '',
});

const onFinish =()=>{
    router.push('/dashboard')
};
</script>

<style scoped>

</style>