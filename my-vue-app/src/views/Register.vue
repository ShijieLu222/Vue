<template>
  <div class="register-container">
    <div class="register-form">
      <h2>用户注册</h2>
      <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off"
        @finish="onFinish" @finishFailed="onFinishFailed">
        <a-form-item label="用户名" name="username" :rules="[{ required: true, message: '请输入用户名!' }]">
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item label="姓名" name="name" :rules="[{ required: true, message: '请输入账号!' }]">
          <a-input v-model:value="formState.name" />
        </a-form-item>

        <a-form-item label="密码" name="password" :rules="[{ required: true, message: '请输入密码!' }]">
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item label="确认密码" name="confirmPassword" :rules="[{ required: true, message: '请输入确认密码!' }]">
          <a-input-password v-model:value="formState.confirmPassword" />
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">注册</a-button>
          <a-button type="default" @click="goToLogin">去登陆</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Register',
  setup() {
    const router = useRouter()

    const formState = reactive({
      username: '',
      name: '',
      password: '',
      confirmPassword: ''
    })
    const onFinish = (values) => {
      console.log('Success:', values)

      const { username, name, password, confirmPassword } = values

      if (password !== confirmPassword) {
        alert('密码不一致，请重新输入！')
        return
      }

      const newUser = {
        username: username,
        name: name,
        password: password,
        role: 'user',
        createTime: new Date().toISOString()
      }

      //保存到本地
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      users.push(newUser)
      localStorage.setItem('users', JSON.stringify(users))

      console.log('注册成功:', newUser)

      //显示成功消息
      alert('注册成功，请登录！')
      //跳转到登录页面
      router.push('/login')
    }

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo)
    }

    const goToLogin = () => {
      router.push('/login')
    }

    return {
      formState,
      onFinish,
      onFinishFailed,
      goToLogin
    }

  }
}
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
  padding: 20px;
  box-sizing: border-box;
}

.register-form {
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.register-form h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #1890ff;
  font-size: 24px;
  font-weight: 600;
}
</style>