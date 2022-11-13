<template>
    <div>
    <div class="documents">
        <span class="header">Документы</span>
        <div class="doc_menu">
            <div class="block_icon">
                <img class="icon" src="../img/Vector.svg" alt="">
            </div>
            <div class="block_type">
                <img class="type" src="../img/Vector-1.svg" alt="">
                <span class="text">Новый тип</span>
            </div>
            <div class="block_type">
                <img class="type"  src="../img/Vector-1.svg" alt="">
                <span class="text">Новый документ</span>
            </div>
        </div>
    </div>
   <table-doc></table-doc>

        
</div>
</template>

<script>
import TableDoc from './table.vue'

export default {
    components: {
        TableDoc,
    },
   data () {
      return {
      }
    },
}
</script>

<style lang="scss" >
 @import '../style/scss/mine';
</style>

