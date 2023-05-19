export default {
    template: `<div class="card" style="width: 18rem;">
    <img :src=imageSrc class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{movieobj.title}}</h5>
      <p class="card-text">{{movieobj.overview}}</p>
      <a  class="btn btn-primary movieBtn" v-on:click="addAdultTicket">Adult Ticket</a>
      <a class="btn btn-primary movieBtn" v-on:click="addChildTicket">Children Ticket</a>

    </div>
  </div>`,
  props:["movieobj"],
  methods:{
    // when the child ticket button is clicked it emit that it is clikced
    addChildTicket(){
      this.$emit('child-clicked',this.movieobj.id)
    },
    // when the child ticket button is clicked it emit that it is clikced
    addAdultTicket(){
      this.$emit('adult-clicked',this.movieobj.id)
    }
  },
  data(){
    return{
      // set img src to the link needed plus the movie backdrop path
      imageSrc:"https://image.tmdb.org/t/p/w500"+this.movieobj.backdrop_path
    }
  }
}