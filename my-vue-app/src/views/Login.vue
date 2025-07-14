<template>
  <div class="login-container">
    <div class="login-form">
      <h2>用户登录</h2>
      <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off"
        @finish="onFinish" @finishFailed="onFinishFailed">
        <a-form-item label="用户名" name="username" :rules="[{ required: true, message: '请输入用户名!' }]">
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item label="密码" name="password" :rules="[{ required: true, message: '请输入密码!' }]">
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
          <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <div class="button-group">
            <a-button type="primary" html-type="submit">登录</a-button>
            <a-button type="default" @click="goToRegister">注册</a-button>
          </div>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Login',
  setup() {
    const router = useRouter()

    // 表单状态
    const formState = reactive({
      username: '',
      password: '',
      remember: false
    })

    const getAllUsers = () => {
      // 默认用户数据（可选保留）
      const defaultUsers = [
        { username: 'admin', password: '123456', role: 'admin', name: '管理员' },
        { username: 'user', password: '123456', role: 'user', name: '普通用户' },
        { username: 'test', password: 'test123', role: 'user', name: '测试用户' }
      ]

      // 从localStorage获取注册的新用户
      const registeredUsers = JSON.parse(localStorage.getItem('users') || '[]')

      // 合并所有用户数据
      return [...defaultUsers, ...registeredUsers]
    }

    // 模拟用户数据
    const mockUsers = [
      { username: 'admin', password: '123456', role: 'admin', name: '管理员' },
      { username: 'user', password: '123456', role: 'user', name: '普通用户' },
      { username: 'test', password: 'test123', role: 'user', name: '测试用户' }
    ]

    // 登录成功处理
    const onFinish = (values) => {
      console.log('表单提交的数据：', values)

      const { username, password } = values

      //查找用户
      const user = mockUsers.find(u => u.username === username && u.password === password)

      if (user) {
        //login successfully
        console.log('登录成功：', user)

        //保存用户信息
        const userData = {
          username: user.username,
          role: user.role,
          name: user.name,
          loginTime: new Date().toISOString()
        }

        //保存到本地
        localStorage.setItem('user', JSON.stringify(userData))

        //显示成功消息
        alert('Welcome back, ' + user.name + '!')

        //跳转到仪表板
        router.push('/dashboard')
      } else {
        //login failed
        console.log('登录失败：用户名或密码错误')
        alert('用户名或密码错误，请重试！')
      }
    }

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo)
    }

    const goToRegister = () => {
      router.push('/register')
    }

    return {
      formState,
      onFinish,
      onFinishFailed,
      goToRegister
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
  padding: 20px;
  box-sizing: border-box;
}

.login-form {
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.login-form h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #1890ff;
  font-size: 24px;
  font-weight: 600;
}

.button-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button-group .ant-btn {
  flex: 1;
  max-width: 150px;
}
</style>