<template>
  <a-form :model="formState" @finish="onFinish" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
    <a-form-item label="用户名" name="username" :rules="[{ required: true, message: '请输入用户名' }]">
      <a-input v-model:value="formState.username" placeholder="用户名"></a-input>
    </a-form-item>
    <a-form-item label="密码" name="password" :rules="[{ required: true, message: '请输入密码' },{ min: 6, message: '密码不少于6位' }]" class="label">
      <a-input-password v-model:value="formState.password" placeholder="密码" />
    </a-form-item>
    <a-form-item :label-col="{ span: 4 }" :wrapper-col="{ span: 24 }">
      <a-button type="primary" html-type="submit" class="login-btn" block>登录</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const formState = reactive({
  username: '',
  password: '',
});

const onFinish = () => {
  router.push('/dashboard')
};
</script>

<style scoped>
.login-btn {
  width: 200px;
}
</style> 