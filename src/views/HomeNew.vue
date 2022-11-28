<template>
  <Header />
  <div class="container">
  <UserCreateNew />
  </div>
  <UserListNew />
</template>

<script>
import UserCreateNew from '@/components/UserCreateNew.vue'
import UserListNew from '@/components/UserListNew.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: { UserCreateNew, UserListNew ,Header}
}
</script>
