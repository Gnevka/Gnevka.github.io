import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {
    docs : [
        {   id: 0, 
            visible: false,
            type:0,
            title: "Обязательные для всех", 
            description: "Документы, обязательные для всех сотрудников без исключения",
            documents:[
                {title:"Паспорт",importance: 'Обязательный',description: "Для всех",type:0,},
                {title:"Инн",importance: 'Обязательный',description: "Для всех",type:1,}
            ]
        },
        { id: 10, visible: false,type:1,
            title: "Обязательные для трудоустройства", description: "Документы, без которых невозможно трудоустройство человека на какую бы то ни было должность в компании вне зависимости от гражданства",documents:[
            {title:"Снилс",importance: 'Обязательный',description: "Для всех",type:1,},
            {title:"ОГРН",importance: 'Обязательный',description: "Для всех",type:1,}
        ]},
        { id: 20, visible: false, title: "Специальные",description: "",type:1,
        documents:[
            {title:"Документ",importance: 'Обязательный',description: "Для всех",type:1,},
            {title:"Еще Документ",importance: 'Обязательный',description: "Для всех",type:1,}
        ]},
    ],
    nocats:[
        {id: 0, title: 'Тестовое задание кандидата', description: "Россия, Белорусия,Украина,Администратор филиала,повар-сушист, повар-пиццмейкер, повар горячего цеха",type:1,},
        {id: 10, title: 'Трудовой договор', description: "",type:0,},
        {id: 10, title: 'Мед книжка', description: "",type:1,},
    ],
    search: '',
    
}

const getters = {
    docs: state => state.docs,
    search: state => state.search,
    nocats: state => state.nocats,
}

const mutations = {
    setSearch: (state, search) => {
        state.search = search
    },
}

const actions = {
}


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
  }
