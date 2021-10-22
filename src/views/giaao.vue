<template>
  <div class="ao1-show">
        <div class="show-ao1">
            <img :src="produpSelect.image" alt=""> 
            <!-- produpSelect.image -->

        </div>

        <div class="text-ao">
                <p>{{ produpSelect.name }}</p>
                <div class="gia">{{ produpSelect.price }}₫</div>
                <div class="quantity">
                        <p v-if="produpSelect.quantity > 0">Còn lại:{{ produpSelect.quantity }} sản Phẩm</p>
                        <p v-else> Sản phẩm đã hết hàng</p>
                </div>
                
                <button class="buying"> Mua Ngay </button> <br>
                <button class="shop"> Đang Có Tại Cửa Hàng </button>
                <div class="kieuao">Kiểu Áo:</div>
       </div>

        <div class="show-ao" >     
                <div id="ao1" v-for="(item, index) in listProdup"  @click="clickimage($event, index)" :key="item.image">
                <img :src="item.image" alt="">
            <!--   <img src="image/a6.jpg" alt="">
                    <img src="image/a2.jpg" alt="">
                    <img src="image/a8.jpg" alt=""> -->
                </div>
          </div>
  </div>

</template>

<script>
export default {
el:'.ao1-show',
data(){
    return {
        selectProdup:0,
        listProdup:[
            {   
                name:'áo phông xám',
                image:'image/a3.jpg',
                price:490000,
                quantity:12,
            }, {
                 name:'áo phông xanh',
                 image:'image/a5.jpg',
                 price:350000,
                 quantity:15,
            }, {
                 name:'áo phông kute',
                 image:'image/a6.jpg',
                 price:280000,
                 quantity:7,
            }, {
                 name:'áo phông xọc',
                 image:'image/a2.jpg',
                 price:300000,
                 quantity:6,
            }, {
                 name:'áo sơ mi trắng',
                 image:'image/a8.jpg',
                 price:450000,
                 quantity:0,
            },
        ]
    }
},
methods:{
    clickimage(e,index){
        this.selectProdup = index;
    }
},
computed:{
    produpSelect(){
        let index = this.selectProdup;
        return this.listProdup[index];
    }
}


}
</script>

<style>
:root {
    background-color: aliceblue;

}
.ao1-show {
    margin-left: 300px;
    display: flex;
}

.show-ao1 img {
    padding-bottom: 20px;
    margin-top: 650px;
    padding-bottom: 50px;
    border-radius: 20px;
    width: 324px;
    height: 524px;
}

.ao1 img {
    margin: 0;
    padding: 0;
}

#ao1 {
    margin-top: 650px;
}
#ao1 img:hover {
    border-radius: 50px;
    transition: all 1s;
}
#ao1 img{
    width: 100px;
    height: 100px;
    margin: 0px 10px;
    /* border-radius: 20px; */
    
  
}
/* di chuyển ảnh nhỏ  */
.show-ao {
    display: flex;
    margin-top: 400px;
    margin-left: -410px;
}
/* Giá Tiền */
.text-ao {
margin-left: 30px;
margin-top: 640px;

}
/* thay đổi tên mầu áo: */
.kieuao {
    font-size: 1.2rem;
    margin-top: 15px;
}
.text-ao p {
    font-size: 2.5rem;
    margin: 20px 0px;

}
.gia {
    color: red;
    font-size: 1.5rem;
    margin: 20px 0px;
    font-weight: 550;
}
.quantity p {
    font-size: 1.4rem;
}
.buying {
    margin: 20px 0px;
    width: 400px;
    height: 30px;
    font-size: 1rem;
    background-color: aliceblue;
    border-bottom-color: aqua;

}
.buying:hover {
    color: #fff;
    background-color:#333;
    transition: all .7s;
}
.shop {
    margin: 20px 0px;
    width: 400px;
    height: 30px;
    font-size: 1rem;
    background-color: aliceblue;
    border-bottom-color: aqua;

}
.shop:hover {
    color: #fff;
    background-color:#333;
    transition: all .7s;

}


</style>