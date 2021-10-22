<template>
  <div class="donu">
       <div class="donu">


      <div class="image_nu">
          <h1>Áo Nữ</h1>
         <table class="nu-image">
                                    <tr>
                                        <th> <a href="/giaaonu"><img src="image/n1.jpg" alt=""></a>  </th>
                                        <th> <a href="/giaaonu"><img src="image/n2.jpg" alt=""></a></th>
                                        <th> <a href="/giaaonu"><img src="image/n3.jpg" alt=""></a></th>
                                        <th> <a href="/giaaonu"><img src="image/n4.jpg" alt=""></a></th>
                                    </tr>
                                    <tr>
                                        <td><a href="/giaaonu"><img src="image/n5.jpg" alt=""></a> </td>
                                        <td><a href="/giaaonu"><img src="image/n6.jpg" alt=""></a></td>
                                        <td><a href="/giaaonu"><img src="image/n7.jpg" alt=""></a></td>
                                        <td><a href="/giaaonu"><img src="image/n8.jpg" alt=""></a></td>
                                    </tr>
         </table>
                
      </div>
  </div>
  </div>
</template>

<script>
export default {
name:'donu',
}
</script>

<style>
.image_nu{
    float: right;
}

.image_nu h1 {
  margin-left: 554px;
}
.image_nu img {
    width: 200px;
    height: 300px;
    border-radius: 20px;
    transition: .8s;

    margin: 50px;
    

}
.image_nu  img:hover {
    height: 320px;
    transition: all .4s;
     transition-timing-function:linear;
    position: relative;
    overflow: hidden;
}
.nu-image td a {
    font-size: 1.2rem;
    color: black;
    text-decoration: none ;
    font-weight: 530;

}

</style>