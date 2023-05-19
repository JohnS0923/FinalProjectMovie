//import components
import Movie from "./components/Movie.js"
import Row from "./components/Row.js"
import Row2 from "./components/Row2.js"
import apiKey from "./apikey.js"
let myapp = {
    data() {
        return {
            //setup data
            apiKey:apiKey,
            numOfMovieWanted:3,
            title: "Current movie",
            movies: [],
            totalChildrenTicket: 0,
            totalAdultTicket: 0,
            adultTicketPrice: 12.99,
            childrenTicketPrice: 7.99

        }
    },
    components: {
        //setup components
        movie: Movie,
        row: Row,
        row2: Row2

    },
    methods: {
        apiGetInfo() {
            //use axios to get info of api
            axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key='+apiKey+'&language=en-US&page=1').then(res => {
                //the for loop, loop through and add movie based on the condition    
            for (let i = 0; i < this.numOfMovieWanted; i++) {
                    //add data for use
                    res.data.results[i].childrenTicket = 0;
                    res.data.results[i].adultTicket = 0;
                    res.data.results[i].id = i;
                    res.data.results[i].show = true;
                    //push the obj into movie array
                    this.movies.push(res.data.results[i])
                }

            })
        },
        //update the amount of children ticket for a movie
        updateChildTicket(e) {
            //add one when clicked
            this.movies[e].childrenTicket++;
            //call change children total function
            this.changeChildrenTotal();
            //set movie to show
            this.movies[e].show = true;

        },
        //update the amount of adult ticket for a movie
        updateAdultTicket(e) {
            //add one when clicked
            this.movies[e].adultTicket++;
            //call change adult total function
            this.changeAdultTotal();
            //set movie to show
            this.movies[e].show = true;

        },
        removeAdultTicket(e) {
            //remove 1 from ticket
            this.movies[e].adultTicket--;
            //call change adult total function
            this.changeAdultTotal();


        },
        removeChildTicket(e) {
            //remove 1 from ticket
            this.movies[e].childrenTicket--;
            //call change children total function
            this.changeChildrenTotal();


        },
        removeMovie(e) {
            //set show to false if show is false the row will not be showned so it will seemed like it is removed
            this.movies[e].show = false;
            //when removed set the ticket to 0
            this.movies[e].adultTicket = 0;
            this.movies[e].childrenTicket = 0;
            //update the total ticket
            this.changeChildrenTotal();
            this.changeAdultTotal();

        },
        //update total ticket for adult
        changeAdultTotal() {
            //set to zero 
            this.totalAdultTicket = 0;
            //loop through and add to the total
            for (let i = 0; i < this.movies.length; i++) {
                this.totalAdultTicket += this.movies[i].adultTicket;
            }
        },
        //update total ticket for child
        changeChildrenTotal() {
            //set to zero 
            this.totalChildrenTicket = 0;
            //loop through and add to the total
            for (let i = 0; i < this.movies.length; i++) {
                this.totalChildrenTicket += this.movies[i].childrenTicket;
            }
        }

    },
    //make it so it will call the api function when page is loaded
    created: function () {
        this.apiGetInfo()
    }
}

Vue.createApp(myapp).mount("#myapp")
