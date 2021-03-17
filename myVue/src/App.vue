<template>
  <div id="app">
    <my-header custom-title="My Contacts" custom-fixed>
<!--      <button @touchstart="backBtn" slot="left">Back</button>-->
<!--      <button @touchstart="homeBtn" slot = "right">Home</button>-->
    </my-header>
    <my-list :user-data = "userData"></my-list>
    <my-alert custom-title="Contacts"></my-alert>
  </div>
</template>



<script>
    var userData = [
      {"index": "A","users":[
          {"name":"Alexander","tel":"1-770-736-8031 x56442","email": "Sincere@april.biz"},
          {"name":"Aiden","tel":"010-692-6593 x09125","email": "Shanna@melissa.tv"},
          {"name":"Andrew","tel":"1-463-123-4447","email": "Nathan@yesenia.net"}
        ]},
      {"index": "B","users":[
          {"name":"Benjamin","tel":"493-170-9623 x156","email": "Julianne.OConner@kory.org"},
          {"name":"Brayden","tel":"(254)954-1289", "email": "Lucio_Hettinger@annie.ca"},
          {"name":"Bentley","tel":"1-477-935-8478 x6430","email": "Karley_Dach@jasper.info"}
        ]},
      {"index": "C","users":[
          {"name":"Carter","tel":"210.067.6132"},
          {"name":"Christopher","tel":"586.493.6943 x140"},
          {"name":"Cameron","tel":"(775)976-6794 x41206"}
        ]},
      {"index": "D","users":[
          {"name":"Daniel","tel":"024-648-3804"},
          {"name":"Daisy","tel":"1301111128"},
          {"name":"Dominic","tel":"1301111129"}
        ]},
      {"index": "E","users":[
          {"name":"Emma","tel":"1301111227"},
          {"name":"Evelyn","tel":"1301111228"},
          {"name":"Elizabeth","tel":"1301111229"}
        ]},
      {"index": "F","users":[
          {"name":"Frank","tel":"1301112227"},
          {"name":"Francis","tel":"1301112228"},
          {"name":"Fernando","tel":"1301112229"}
        ]}

    ];
export default {
  name: 'app',
  data () {
    return {
      userData : userData
    }
  },
  // methods:{
  //   backBtn:function (){
  //     alert(123);
  //   },
  //   homeBtn:function (){
  //     alert(321);
  //   }
  // }
}
</script>

<style>
*{margin: 0;padding:0;}
li {list-style: none;}
body {
  background-color: #eeeeee;
}
</style>
