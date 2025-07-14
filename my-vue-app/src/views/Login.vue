<template>
    <div class="login-container">
        <div class="login-card">
            <h1>场地管理系统</h1>
            <LoginForm />
        </div>
    </div>
</template>

<script setup>
import LoginForm from '../components/LoginForm.vue';
</script>

<style scoped>
.login-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f6fa;
}

.login-card {
    background: #fff;
    padding: 24px 20px 20px 20px;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(5, 87, 195, 0.929);
    min-width: 350px;
    border: 1px solid #e4e7ed;
}
</style>