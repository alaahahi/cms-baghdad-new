<template>
  <div class="container mt-4">

<div class="row height d-flex justify-content-center align-items-center">

  <div class="col-md-8">

    <div class="search">
      <i class="fa fa-search"></i>
      <input type="text"  v-model="text" class="form-control" placeholder="رقم البطاقة">
      <button class="btn btn-primary">بحث</button>
    </div>
    
  </div>
  <h5 class="text-center pt-3" v-if="this.text">عدد النتائج  {{pageuser.length}}</h5>

</div>
</div>
  <div class="card m-4 " >
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
          <th class="action" scope="col">تنفيذ</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, name, phone, cardNumber ,address ,startDate ,seller ,family  } in pageuser" :key="id">
          <td scope="col">{{name}}</td>
          <td scope="col">{{phone}}</td>
          <td scope="col"> {{cardNumber}}</td>
          <td scope="col">{{address}}</td>
          <td scope="col">{{startDate}}</td>
          <td scope="col">{{seller}}</td>
          <td scope="col">{{family}}</td>
          <td  class="action">
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
    <div class="m-3" v-if="!this.text">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li  v-for="item in Math.ceil(user1.length / 10)" :key="item"  class="page-item"><button  @click="() => goToPage(item)" class="page-link">{{item}}</button></li>
      </ul>
    </nav>
    </div>


  </div>
  </div>
</template>

<script>
import { useLoadUser1, deleteUser1 } from '@/firebase'

export default {
  data() {
    return {
      from:0,
      to:9,
      text:""
    }
  },
  methods:{
    goToPage(page){
      this.from = (page * 10) - 10
      this.to = page * 10
    }
  },
  computed: {
    // a computed getter
    pageuser() {
      // `this` points to the component instance
     // return this.user1.slice(this.from,this.to)
      return   this.text ? this.user1.filter((e) =>!e.name.toLowerCase().indexOf(this.text.toLowerCase()) || !String(e.cardNumber).indexOf(this.text.toLowerCase())  || !e.seller.toLowerCase().indexOf(this.text.toLowerCase())  || !e.phone.toLowerCase().indexOf(this.text.toLowerCase()))
        :this.user1.slice(this.from,this.to)
    }
  },
  setup() {
    const user1 = useLoadUser1()
    return { user1, deleteUser1 }
  },
 
}
</script>
<style scoped>

.search{
       position: relative;
       box-shadow: 0 0 40px rgba(51, 51, 51, .1);
         
       }

       .search input{

        height: 60px;
        text-indent: 25px;
        border: 2px solid #d6d4d4;


       }


       .search input:focus{

        box-shadow: none;
        border: 2px solid blue;


       }

       .search .fa-search{

        position: absolute;
        top: 20px;
        right: 16px;

       }

       .search button{

        position: absolute;
        top: 5px;
        left: 5px;
        height: 50px;
        width: 110px;
        background: blue;

       }
</style>
