<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider>
      <Sidebar v-model:selectedKey="activeKey" />
    </a-layout-sider>
    <a-layout-content style="padding: 24px">
      <component :is="contentMap[activeKey]" />
    </a-layout-content>
  </a-layout>
</template>

<script setup>
import { ref } from 'vue';
import Sidebar from '@/components/Dashboard/Sidebar.vue';
import DashboardContent from '@/components/Dashboard/DashboardContent.vue';
import VenueContent from '@/components/Dashboard/VenueContent.vue';
import BookingContent from '@/components/Dashboard/BookingContent.vue';
import ActivityContent from '@/components/Dashboard/ActivityContent.vue';
import UserContent from '@/components/Dashboard/UserContent.vue';
import ProfileContent from '@/components/Dashboard/ProfileContent.vue';
import SettingsContent from '@/components/Dashboard/SettingsContent.vue';
import LogsContent from '@/components/Dashboard/LogsContent.vue';

const activeKey = ref('dashboard');

const contentMap = {
  dashboard: DashboardContent,
  venue: VenueContent,
  booking: BookingContent,
  activity: ActivityContent,
  user: UserContent,
  profile: ProfileContent,
  settings: SettingsContent,
  logs: LogsContent
};
</script>