"use strict";
const { createApp } = Vue
  
createApp({
    data() {
        return {
            films: [],
        }
    },
    created() {
        const params = {
            title: '',
            author: '',
            year: '',
            poster: '',
            genre: '',
        };

        axios.get('http://localhost:8888/php-dischi-json/dischi.json', {params}).then( (response)=> {
            this.films = response.data;
        });
    },
}).mount('#app')