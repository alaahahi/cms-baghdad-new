<template>
  <HeaderNew />
  <div class="container">
  <UserCreateNew />
  </div>
  <UserListNew />
</template>

<script>
import UserCreateNew from '@/components/UserCreateNew.vue'
import UserListNew from '@/components/UserListNew.vue'
import HeaderNew from '@/components/HeaderNew.vue'

export default {
  name: 'Home',
  components: { UserCreateNew, UserListNew ,HeaderNew}
}
</script>
