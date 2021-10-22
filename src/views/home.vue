<template>

        <div class="text">
            <h2>Sản Phẩm</h2>
        </div>
            <div class="image-show">
                    <table class="show-image">
                                    <tr>
                                        <th> <a href="/giaao"><img src="image/a1.jpg" alt=""></a> <p>Áo Sơ Mi</p> </th>
                                        <th> <a href="/giaao"><img src="image/a2.jpg" alt=""></a><p>Áo Phông Sọc</p></th>
                                        <th> <a href="/giaao"><img src="image/a3.jpg" alt=""></a><p>Áo Phông Xám</p></th>
                                        <th> <a href="/giaao"><img src="image/a4.jpg" alt=""></a><p>Áo Phông Vàng</p></th>
                                    </tr>
                                    <tr>
                                        <td><a href="/giaaonu"><img src="image/n1.jpg" alt=""></a><p>Áo Phông Cam</p></td>
                                        <td><a href="/giaaonu"><img src="image/n2.jpg" alt=""></a><p>Áo Phông Nâu</p></td>
                                        <td><a href="/giaaonu"><img src="image/n3.jpg" alt=""></a><p>Áo Phông Xanh Rêu</p></td>
                                        <td><a href="/giaaonu"><img src="image/n4.jpg" alt=""></a><p>Áo Phông Xám Tro</p></td>
                                    </tr>
                                    <tr>
                                        <td><a href="/giamu"><img src="image/m1.jpg" alt=""></a><p>Mũ Xanh</p></td>
                                        <td><a href="/giamu"><img src="image/m2.jpg" alt=""></a><p>Mũ Đỏ</p></td>
                                        <td><a href="/giamu"><img src="image/m3.jpg" alt=""></a><p>Mũ Vàng</p></td>
                                        <td><a href="/giamu"><img src="image/m4.jpg" alt=""></a><p>Mũ Xám</p></td>
                                    </tr>
                    </table>
            </div>

</template>

<script>
export default {
name:'home',

}
</script>

<style>
:root{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    position: absolute;
    background-color: #dbdbdb;

}
.content {
    float:right;
}

 .text h2 {
    color: black;
margin-left:840px;

}
/* img */
.image-show {
    float: right;
}

.image-show  img {
    width: 200px;
    height: 300px;
    border-radius: 20px;
    transition: .8s;

    margin: 50px;
    

}

.show-image td a {
    font-size: 1.2rem;
    color: black;
    text-decoration: none ;
    font-weight: 530;

}

.show-image p {
    text-align: center;
    margin: -40px 0px 50px 0px;
    font-weight: 500;
}


</style>