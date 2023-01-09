<template>
  <h2 class="text-center py-3">معلومات بطاقات مشفى العالمي الأهلي</h2>
  <div class="card card-body mt-4 cardAdd">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>الاسم كامل</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>رقم البطاقة</label>
        <input type="text" v-model="form.cardNumber" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>رقم الهاتف</label>
        <input v-model="form.phone" class="form-control" required />
      </div>

      <div class="form-group  mt-3">
        <label>العنوان</label>
        <input v-model="form.address" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>تاريخ التفعيل</label>
        <input type="date"
        v-model="form.startDate" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>المندوب</label>
        <select v-model="form.seller" class="form-select" aria-label="Default select example">
          <option selected disabled>يرجى الأختيار</option>
          <option value="علي سفر">علي سفر</option>
          <option value="ابراهيم نافع">ابراهيم نافع</option>
          <option value="علاء نافع">علاء نافع</option>
          <option value="علي عبد الكريم">علي عبد الكريم</option>
          <option value="ايلاف خالد">ايلاف خالد</option>
          <option value="اسماء عادل">اسماء عادل</option>
          <option value="ضحى حسام">ضحى حسام</option>
          <option value="علي شاكر">علي شاكر</option>
          <option value="حسن حازم">حسن حازم</option>
          <option value="حنين عقيل">حنين عقيل</option>
          <option value="احمد صبيح">احمد صبيح</option>
          <option value="محمد جاسم">محمد جاسم</option>
          <option value="مينا رياض">مينا رياض</option>
          <option value="عبد المهيمن ناظر">عبد المهيمن ناظر</option>
          <option value="نبراس هادي">نبراس هادي</option>
          <option value="ثريا محمد">ثريا محمد</option>
        </select>
      </div>
      <div class="form-group mt-3">
        <label>اسماء افراد العائلة</label>
        <input
          v-model="form.family"
          class="form-control"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary mt-3">
        حفظ
      </button>
    </form>
  </div>
</template>

<script>
import { createUser1 } from '@/firebase'
import { reactive } from 'vue'

export default {
  setup() {
    const form = reactive({ name: '',phone:'',cardNumber:'',address:'',startDate:'',seller:'',family:'' })

    const onSubmit = async () => {
      await createUser1({ ...form })
      form.name = ''
      form.cardNumber = ''
      form.phone = ''
      form.address = ''
      form.startDate = ''
      form.seller = ''
      form.family = ''
    }

    return { form, onSubmit }
  }
}
</script>
