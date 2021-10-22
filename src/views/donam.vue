<template>
  <div class="donam">

      <div class="image_nam">
        <h1>Áo Nam</h1> 
         <table class="nam-image">
                                    <tr>
                                        <th> <a href="/giaao"><img src="image/a1.jpg" alt=""></a></th>
                                        <th> <a href="/giaao"><img src="image/a2.jpg" alt=""></a></th>
                                        <th> <a href="/giaao"><img src="image/a3.jpg" alt=""></a></th>
                                        <th> <a href="/giaao"><img src="image/a4.jpg" alt=""></a></th>
                                    </tr>
                                    <tr>
                                        <td><a href="/giaao"><img src="image/a5.jpg" alt=""></a> </td>
                                        <td><a href="/giaao"><img src="image/a6.jpg" alt=""></a></td>
                                        <td><a href="/giaao"><img src="image/a7.jpg" alt=""></a></td>
                                        <td><a href="/giaao"><img src="image/a8.jpg" alt=""></a></td>
                                    </tr>
         </table>
                
      </div>
  </div>
</template>

<script>
export default {
name:'donam',

}
</script>

<style>
/* img */
.image_nam{
    float: right;
}

.image_nam img {
    width: 200px;
    height: 300px;
    border-radius: 20px;
    transition: .8s;
    margin: 50px;
}

.image_nam h1 {
  margin-left: 540px;
}

.nam-image td a {
    font-size: 1.2rem;
    color: black;
    text-decoration: none ;
    font-weight: 530;

}


</style>