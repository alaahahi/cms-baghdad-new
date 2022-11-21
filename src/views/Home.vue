<template>
  <Header />
  <div class="container">
  <UserCreate />
  </div>
  <UserList />
</template>

<script>
import UserCreate from '@/components/UserCreate.vue'
import UserList from '@/components/UserList.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: { UserCreate, UserList ,Header}
}
</script>
