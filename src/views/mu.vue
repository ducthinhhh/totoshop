<template>
     <div class="image_mu">
          <h1>Mũ</h1> 
         <table class="mu-image">
                                    <tr>
                                        <th> <a href="/giamu"><img src="image/m1.jpg" alt=""></a>  </th>
                                        <th> <a href="/giamu"><img src="image/m2.jpg" alt=""></a></th>
                                        <th> <a href="/giamu"><img src="image/m3.jpg" alt=""></a></th>
                                        <th> <a href="/giamu"><img src="image/m4.jpg" alt=""></a></th>
                                    </tr>
                                    <tr>
                                        <td><a href="/giamu"><img src="image/m5.jpg" alt=""></a> </td>
                                        <td><a href="/giamu"><img src="image/m6.jpg" alt=""></a></td>
                                        <td><a href="/giamu"><img src="image/m7.jpg" alt=""></a></td>
                                        <td><a href="/giamu"><img src="image/m8.jpg" alt=""></a></td>
                                    </tr>
         </table>
                
      </div>
</template>

<script>
export default {

}
</script>

<style>
.image_mu{
    float: right;
}

.image_mu img {
    width: 200px;
    height: 300px;
    border-radius: 20px;
    transition: .8s;
    margin: 50px;
}

.image_mu h1 {
  margin-left: 580px;
}
.image_mu  img:hover {
    height: 320px;
    transition: all .4s;
     transition-timing-function:linear;
    position: relative;
    overflow: hidden;
}
.mu-image td a {
    font-size: 1.2rem;
    color: black;
    text-decoration: none ;
    font-weight: 530;

}


</style>