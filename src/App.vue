<template>
<div>
    <comheader />
    <router-view />
    <comfooter />

</div>

</template> 
<script>
import comheader from './views/comheader.vue'
import comfooter from './views/comfooter.vue'

export default {
    name:'App',
    components:{ 
        comheader,
        comfooter
    }, 
}
</script>