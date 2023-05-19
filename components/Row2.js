export default {
    template:`
    <div class="gridv2">
        <h3></h3>
        <h5>{{title}}</h5>
        <p v-if="amount >0">{{amount}} @ {{(amount*price).toFixed(2)}}</p>

        <div class="row-border2"></div>
    </div>`,
    props:["title","amount","price"]
}