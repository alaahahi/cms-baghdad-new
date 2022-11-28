<template>
  <div class="card mt-4 " >
    <div class="table-responsive">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">الاسم كامل</th>
          <th scope="col">رقم الهاتف</th>
          <th scope="col">رقم البطاقة</th>
          <th scope="col">العنوان</th>
          <th scope="col">تاريخ التفعيل</th>
          <th scope="col">المندوب</th>
          <th scope="col">اسماء افراد العائلة</th>
          <th scope="col">تنفيذ</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, name, phone, cardNumber ,address ,startDate ,seller ,family  } in user1" :key="id">
          <td scope="col">{{name}}</td>
          <td scope="col">{{phone}}</td>
          <td scope="col"> {{cardNumber}}</td>
          <td scope="col">{{address}}</td>
          <td scope="col">{{startDate}}</td>
          <td scope="col">{{seller}}</td>
          <td scope="col">{{family}}</td>
          <td>
            <router-link :to="`/edit/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteUser1(id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
import { useLoadUser1, deleteUser1 } from '@/firebase'

export default {
  setup() {
    const user1 = useLoadUser1()
    return { user1, deleteUser1 }
  },
 
}
</script>
