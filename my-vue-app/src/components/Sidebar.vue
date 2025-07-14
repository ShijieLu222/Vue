<template>
    <a-menu mode="inline" theme="light" style="height: 100%; border-right: 0" :selectedKeys="[props.selectedKey]"
        @click="handleClick">
        <a-menu-item v-for="item in menuItems" :key="item.key">
            <!-- icon渲染 -->
            <component :is="iconMap[item.icon]" style="margin-right: 8px" />
            <!-- label渲染 -->
            {{ item.label }}
        </a-menu-item>
    </a-menu>
</template>




<script setup>
import { defineProps, defineEmits } from 'vue';

// 1. 引入Ant Design Vue图标
import { DashboardOutlined, HomeOutlined, CalendarOutlined, UserOutlined, IdcardOutlined, SettingOutlined, FileSearchOutlined, AppstoreOutlined } from '@ant-design/icons-vue';


const props = defineProps({
    selectedKey: String
});
const emit = defineEmits(['update:selectedKey']);

// 2. 菜单数据
const menuItems = [
    { key: "dashboard", label: "仪表盘", icon: "dashboard" },
    { key: "venue", label: "场地管理", icon: "home" },
    { key: "booking", label: "场地预定", icon: "calendar" },
    { key: "activity", label: "活动管理", icon: "appstore" },
    { key: "user", label: "用户管理", icon: "user" },
    { key: "profile", label: "个人信息", icon: "idcard" },
    { key: "settings", label: "系统设置", icon: "setting" },
    { key: "logs", label: "操作日志", icon: "file-search" },
];
// 3. 图标映射
const iconMap = {
    dashboard: DashboardOutlined,
    home: HomeOutlined,
    calendar: CalendarOutlined,
    appstore: AppstoreOutlined,
    user: UserOutlined,
    idcard: IdcardOutlined,
    setting: SettingOutlined,
    "file-search": FileSearchOutlined,
};

const handleClick = (e) => {
    emit('update:selectedKey', e.key);
}
</script>



<style scoped></style>