<template>
    <section>
        <div class="search">
            <img src="../img/Vector-2.svg" alt="">
            <input v-model="search" />
            <button v-if="search.length >= 1" @click="search = ''">
                <img src="../img/Vector-3.svg" alt="">
            </button>
        </div>
        <div  style="width:90%">
            <draggable
            :filteredList="filteredList"
                :disabled="!enabled"
                handle=".handle"
                item-key="title"
                
            >
     
            <div v-for="(element, i) in filteredList" :key="i" >
                <div  class="tableblock">
                    <div class="tableblock_icon">
                        <img class="vector-icon" :src="element.visible == true ? img2 : img1" alt="" @click="element.visible = !element.visible">
                    </div>
                    <div class="caption">
                        <span>{{element.title}}</span>
                    </div>
                    <div v-if="element.type == 0" class="row caption">
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
                        <div class="management-icon handle">
                                <img src="../img/Vector-5.svg" alt="">
                            
                        </div>
                    </div>

                </div>
                <draggable
                    :filteredList="element.documents"
                    :disabled="!enabled"
                    :group="{ name: 'element' }"
                    handle=".handle"
                    item-key="title"
                >
                <div class="tablesubblock" v-show="element.visible == true" v-for="(elem, index) in element.documents" :key="index" >
                    <div class="caption">
                        <span>{{elem.title}}</span>
                    </div>
                    <div v-if="elem.type == 0" class="caption">
                        <img src="../img/Ellipse 17.svg" alt="">
                    </div>
                    <div class="importance">
                        <span>{{elem.importance}}</span>
                    </div>
                    <div class="description">
                        <span>{{elem.description}}</span>
                    </div>
                    <div class="row doc_menu">
                        <div class="management-icon">
                            <img src="../img/Vector-9.svg" alt="">
                        </div> 
                        <div class="management-icon">
                            <img src="../img/delete.svg" alt="">
                        </div> 
                        <div class="management-icon handle">
                            <img src="../img/Vector-5.svg" alt="">
                        </div>
                    </div>
                </div>
                </draggable>
            </div>
        </draggable>
        </div>
        <div  style="width:90%; margin-top: 20px;">
            <div  v-for="(element, i) in nocats" :key="i" >
                <div  class="tableblock">
                    <div class="caption">
                        <span>{{element.title}}</span>
                    </div>
                    <div v-if="element.type == 0" class="row caption">
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
            </div>
        </div>
        
    </section>
</template>

<script>
import Vuex from "vuex"
import draggable from "vuedraggable"
export default {
    
   data () {
    
      return {
        enabled: true,
        search:'',
        postList: [],
        dragging: false
      }
    },
    components: {
        draggable,
    },
    computed: {
        draggingInfo() {
            return this.dragging ? "under drag" : "";
        },
        img1 () {
            return  require("../img/Vector-4.svg")
        },
        img2 () {
            return  require("../img/Vector-8.svg")
        },
        ...Vuex.mapGetters({
            docs: "documents/docs",
            storeSearch: "documents/search",
            nocats: "documents/nocats",
        }), 
        filteredList() {
            if (this.search) {
                return this.postList.filter((item) => {
                const tags = item.documents?.map(({
                    title
                }) => title.toLowerCase()) ?? []
                const arr = [item.title.toLowerCase(), ...tags]
                return arr.some(e => e.includes(this.search))
                })
            } else {
                return this.postList
            }
        }
    },
    created(){
        this.postList = this.docs
    },
    methods:{
        ...Vuex.mapMutations({
            setSearch: "documents/setSearch",
        }),
    }
}
</script>