<template>
    <div  style="width:90%">

    <div v-for="(element, i) in filteredList" :key="i">

   
    <div  class="tableblock">
        <div class="tableblock_icon">
            <img class="vector-icon" :src="element.visible == true ? img2 : img1" alt="" @click="element.visible = !element.visible">
        </div>
        <div class="caption">
            <span>{{element.nameCat}}</span>
        </div>
        <div class="row caption">
            <div>
                <img src="../img/Ellipse 17.svg" alt="">
            </div>
            <div>
                <img src="../img/Ellipse 17.svg" alt="">
            </div>
            <div>
                <img src="../img/Ellipse 17.svg" alt="">
            </div>
        </div>
        <div class="description">
            <span>{{element.description}}</span>
        </div>
        <div class="row doc_menu">
            <div class="management-icon">
                <img src="../img/Vector-9.svg" alt="">
            </div> 
            <div class="management-icon">
                <img src="../img/delete.svg" alt="">
            </div> 
            <div class="management-icon">
                <img src="../img/Vector-5.svg" alt="">
            </div>
        </div>

    </div>
    <div class="tablesubblock" v-show="element.visible == true" v-for="(elem, index) in element.documents" :key="index" draggable="true">
        <div class="caption">
            <span>{{elem.name}}</span>
        </div>
        <div v-if="elem.type == 0" class="caption">
            <img src="../img/Ellipse 17.svg" alt="">
        </div>
        <div class="caption">
            <span>{{elem.importance}}</span>
        </div>
        <div class="caption">
            <span>{{elem.description}}</span>
        </div>
    </div>
</div>
{{filteredList}}
</div>
</template>

<script>
import Vuex from "vuex"

export default {
props:['element'],
   data () {
      return {

      }
    },
    computed: {
        img1 () {
            return  require("../img/Vector-4.svg")
        },
        img2 () {
            return  require("../img/Vector-8.svg")
        },
        ...Vuex.mapGetters({
            docs: "documents/docs",
            storeSearch: "documents/search",
        }),
        // allQuestions() {
        //         // un-nest all questions as a flat array
        //         return this.docs
        //         .map(category => category.documents)
        //         .reduce((acc, item) => acc.concat(item), []);
        //     },
        //     filteredList() {
        //         const term = this.storeSearch.toLowerCase();
        //         if(!term) return this.allQuestions;
        //         // only questions or answers which contain the term will be returned
        //         return this.allQuestions.filter(qa => qa.name.toLowerCase().indexOf(term) >= 0)
        //     }
        filteredList() {
            return this.docs.filter(item => {
                for (const {name} of item.documents) {
                if (
                    name.indexOf(this.storeSearch) > -1 
                ) {
                    return item
                }
                }
            })
            
            }

    },
    methods:{
        sortArray() {
            this.postList = this.docs.filter(item => {
                return item.name.includes(this.search) ||
                        item.documents.map((el)=>{
                            el.name.includes(this.search)
                        })
            })
        }
    }
}
</script>