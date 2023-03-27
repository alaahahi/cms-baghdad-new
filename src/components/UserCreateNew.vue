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
          <option value="محمد جاسم">محمد جاسم</option>
          <option value="مينا رياض">مينا رياض</option>
          <option value="عبد المهيمن ناظر">عبد المهيمن ناظر</option>
          <option value="مهند فؤاد">مهند فؤاد</option>
          <option value="علي احمد">علي احمد</option>
          <option value="محمد خطاب">محمد خطاب</option>
          <option value="احمد محمد">احمد محمد</option>
          <option value="ندى احمد">ندى احمد</option>
          <option value="احمد صبحي">احمد صبحي</option>
          <option value="حيدر سعد">حيدر سعد</option>
          <option value="وائل مكي">وائل مكي</option>
          <option value="احمد المندلاوي">احمد المندلاوي</option>
          <option value="يوسف حميد">يوسف حميد</option>
          <option value="مصطفى احمد">مصطفى احمد</option>
          <option value="علي اصيل">علي اصيل</option>
          <option value="مصطفى قصي">مصطفى قصي</option> 
          <option value="محمد جاسم علي">محمد جاسم علي</option>
          <option value="ولاء كاظم">ولاء كاظم</option>
          <option value="ايلاف ثائر">ايلاف ثائر</option> 
          <option value="علي عباس">علي عباس</option>
          <option value="زهراء جاسم">زهراء جاسم</option>  
          <option value="ظبيه هاشم">ظبيه هاشم</option>
          <option value="منظر زياد">منظر زياد</option>
          <option value="ضحى قيس">ضحى قيس</option>
          <option value="همام سعد فرهود">همام سعد فرهود</option>
          <option value="مرح احمد">مرح احمد</option>
          <option value="زهراء فاروق">زهراء فاروق</option>
          <option value="علي كاظم">علي كاظم</option>

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
