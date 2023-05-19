export default {
    template: `        
    <div class="grid"  v-if="movieobj.show">
        <h5>{{movieobj.title}}</h5>
        
        <p class="position-relative" v-if="movieobj.adultTicket>0">{{movieobj.adultTicket}} × {{adultPrice}}    
        <span class="changecursor badge rounded-circle text-bg-info" v-on:click="removeAdult">-</span>
        </p>
        <h5 v-if="movieobj.adultTicket==0"></h5>
        <p v-if="movieobj.childrenTicket>0">{{movieobj.childrenTicket}} × {{childPrice}}
            <span class="changecursor badge rounded-circle text-bg-info" v-on:click="removeChild">-</span>
        </p>
        <h5 v-if="movieobj.childrenTicket==0"></h5>

        
        <p >{{((movieobj.childrenTicket*childPrice)+(movieobj.adultTicket*adultPrice)).toFixed(2)}}</p>
        <button type="button" class="btn btn-primary btn-sm" v-on:click="remove">Remove </button>
        <div class="row-border"></div>

    </div>`,
    props: ["movieobj"],
    methods: {
        removeAdult() {
            this.$emit('delete-adult-clicked', this.movieobj.id)
        },
        removeChild() {
            this.$emit('delete-child-clicked', this.movieobj.id)
        },
        remove(){

            this.$emit('delete-movie-clicked', this.movieobj.id)
        }
    },
    data(){
        return{
            childPrice:7.99,
            adultPrice:12.99

        }
    }
}