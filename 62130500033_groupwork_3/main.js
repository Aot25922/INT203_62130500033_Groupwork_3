const app = {
    data() {
        return {
            img:[{src:'./images/Denycard.webp',rate:'49.5%',fav:false},
            {src:'./images/combat.webp',rate:'52.3%',fav:false},
            {src:'./images/shot.webp',rate:'51.5%',fav:false}
            ],
            svg :"http://www.w3.org/2000/svg"

        }
    },
    methods: {
        addFav(index){
            this.img[index].fav= !this.img[index].fav;
            document.getElementsByTagName("svg")[index].style.opacity=1;
        },
        preFav(index){
            this.img[index].fav= !this.img[index].fav;
            document.getElementsByTagName("svg")[index].style.opacity=0.5;
        }
    },
    computed: {
        count(){
            return this.img.filter( t => !t.fav ).length ;
        }
    }

}

mountedApp = Vue.createApp(app).mount('#app')