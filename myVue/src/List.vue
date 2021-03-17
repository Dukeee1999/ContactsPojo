<template>
  <div id = "list">
    <ul class="list_user" ref ="listUser" @touchmove="bMove=true" >
      <li v-for="item in userData">
        <p>{{item.index}}</p>
        <ul>
          <li @touchend="showInfo(user.tel)" v-for="user in item.users">
            {{user.name}}
          </li>
        </ul>
      </li>

    </ul>
    <ul class="list_index" ref = "listIndex">
      <li @touchstart="setScroll" v-for="item in userIndex">{{item}}</li>
    </ul>
  </div>
</template>

<script>

import myAlert from "./HandleAlert.js";

export default {
  name: "myList",
  props : {
    'user-data':{
      type :Array,
      default :function (){
        return [];
      }
    }
  },
  data:function (){
    return{
      bMove : false
    };
  },
  computed:{
    userIndex :function (){
      return this.filterIndex(this.userData);
    }
  },
  methods: {
    filterIndex :function (data){
      var result = [];
      for(var i =0;i<data.length;i++){
        if(data[i].index){
          result.push(data[i].index);
        }
      }
      return result;
    },
    setListIndexPos :function (){
      var ih = this.$refs.listIndex.offsetHeight;
      this.$refs.listIndex.style.marginTop = - ih/2 + 'px';
    },
    setScroll :function (ev){
      var ap = this.$refs.listUser.getElementsByTagName('p');
      for(var i =0;i<ap.length;i++){
        if(ap[i].innerHTML==ev.target.innerHTML){
          document.documentElement.scrollTop = ap[i].offsetTop;
          document.body.scrollTop = ap[i].offsetTop;
        }
      }
    },
    showInfo :function (tel){
      if(!this.bMove) {
        myAlert({
          title: 'Call',
          body : tel,
          confirm: function (){
            alert("Calling...");
          },
          cancel: function (){
            document.body.removeChild(document.getElementById('alert'));
          }
        });
      }
      else{
        this.bMove = false;
      }
    }
  },
  mounted : function (){
    this.setListIndexPos()
  }
}
</script>

<style >
  #list {position:relative; top:40px; overflow:hidden;}
  #list .list_user p{ background:#ccc; padding-left: 10px;}
  #list .list_user ul li{ height: 50px; line-height: 50px; border-bottom: 1px #ccc solid; padding-left: 10px}
  #list .list_index { position: fixed; right: 10px; top:50%; font-size: 20px;}
  #list .list_index li{margin: 5px 0;}

</style>
