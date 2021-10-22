<template>
<div class="header">
    <div class="image">
        <img src="image/logo.jpg" alt="">
    </div>
    <div class="icon">
        <a href="https://www.facebook.com/groups/TotofanzoneTotoshop"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.youtube.com/channel/UCNlOKoeutijiatYxUkDXGnA"><i class="fab fa-youtube"></i></a>
        <a href="https://www.instagram.com/totoshopvn/"><i class="fab fa-instagram"></i></a>
    </div>
    <div class="menu">
            <span>
              <a href="/">New Arrivals</a>
            </span>
           <span>
             <a href="/">Home</a>
           </span>
            
          <span>
            <a href="/donam">Áo Nam</a>
          </span>
          <span>
              <a href="/donu">Áo Nữ</a>
          </span>
          <span>
            <a href="/mu">Mũ</a>
            </span>

            <!-- <a href="/"><li>New Arrivals</li></a> -->
            <!-- <a href=""><li>Áo Nam</li></a>
            <a href="/aonu"><li>Áo Nữ</li></a>
            <a href="/aodoi"><li>Áo Đôi</li></a>
            <a href="/mu"><li>Mũ</li></a> -->
    </div>
    <div class="telephone">
        <i class="fas fa-phone-alt">  1900633501</i>
    </div>

</div>
<div class="conten">

        <div class="bia">
        <img src="image/logonen.jpg" alt="">
        </div>
</div>

</template>

<style>
* {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    position: relative;

}
.header {
    width: 289px;
    height:720px;
    /* hiển thị thanh cuộn */
    overflow-y: scroll;
    display: block;
    position:fixed;
    
}
.image img {
    width: 180px;
    height: 111px;
    margin: 30px 40px;
    border-radius: 20px;
}
.menu span a {
    list-style: none;
    font-size: 1.4rem;
    cursor: pointer;
    border-radius: 20px ;
    transition: all .3s;
   display: flex;
    justify-content: center;
    margin-left: 10px;
     margin-bottom: 40px;
}

.menu span a:hover {
    color: #fff;
    background: black;
    transition: all 0.7s;
   
    }
.menu a {
    text-decoration: none;
    color: black;
    font-size: 1.4rem;
    margin: 20px;
    margin-left: 50px;
    cursor: pointer;
    transition: all .3s;
    border-radius: 10px;

        
        
}
.menu a:hover {
    color: #fff;
    transform: 5s ;
    background: black;
    /* border: 1px solid; */
    /* border-radius: 20px ; */
    transition: all 1s;

}

.bia img {
    width: 1186px;
    height: 584px;
    float:right;
    position: relative;
    padding-bottom: 50px;
}
.telephone  i {
    font-size: 1.4rem;
    padding: 7px 4px;
    background:black;
    color: #fff;
    margin: 50px;
    cursor: pointer;
    border-radius: 20px;

}
.telephone  i:hover {
    color: red;
    background: #fff;
    transform: 1s ;
    transition: all .3s;

}
.icon a i {
    color: #666;
   margin: 35px;

}

.icon a i:hover {
    color: #fff;
    cursor: pointer;
    border: solid;
    background: greenyellow;
    transition: all 1s;
    border-radius: 10px;
    padding: 2px ;

}

</style>    

