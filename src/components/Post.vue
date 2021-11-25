<template>
  <div class="container">
    <div>
      <button id="buttonR" v-on:click="resetFunction">Reset Likes</button>
    </div>
    <div v-for="post in getPosts" :key='post.id' class="posts">
      <div class = "post1">
        <div class="post1">
          <div class="upper">
            <img src="../assets/postit.png" alt="user">
            {{post.time}}
          </div>
          <div class="inside">
            <img :src="post.img" alt="image">
          </div>
          <div class="text">
            <p>{{post.text}}</p>
            <img src="../assets/like.jpe"g v-on:click="LikeFunction(post.postid)" alt="like">
            <div>{{post.like}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getPosts'])
  },
  name: 'Post',

  methods:{

    LikeFunction(postid){
      this.$store.dispatch('likeAction',{postid})
    },

    resetFunction(){
      this.$store.dispatch('resetAction')
    }
  }
}
</script>

<style>

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {background-color: #ddd;}


button {
  display: inline-block;
  height: 66px;
  padding: 0;
  margin: 0;
  vertical-align: top;
  width: 66px;
}

#close-image img {
  pointer-events: none;
  display: block;
  height: 130px;
  width: 100px;
}

#close-CSS {
  background-image: url( "https://www.vhv.rs/dpng/d/436-4363443_view-user-icon-png-font-awesome-user-circle.png" );
  pointer-events: none;
  background-size: 100px 130px;
  height: 134px;
  width: 104px;
}


header nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
}

nav {
  display: flex;
  background-color: #ffffff;
  align-items: center;
}

nav div {
  height: 30px;
  flex-grow: 4;
  padding-right: 20px;
  padding-left: 20px;
}

nav div img {
  height: 100%;
}

nav #user {
  text-align: right;
}

nav div.search-container > input {
  box-sizing: border-box;
  height: 30px;
  width: 80%;
  margin: 0;
  padding: 5px;
  border: 1px solid #e0e0e0;
}

nav div.search-container > button {
  box-sizing: border-box;
  height: 30px;
  width: 15%;
  margin: 0;
  padding: 5px;
  border: 1px solid #328ed6;
  cursor: pointer;
  background-color: #328ed6;
  color: white;
  font-weight: bold;
}

section {
  background-color: DodgerBlue;
}

.container {
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  width: 60%;
  margin: auto;
}

.posts {
  flex-direction: column;
  text-align: center;
  margin-top: 20px;
}

.post1 {
  box-shadow: 3px 3px 3px 3px #cac5c5;
}

.post1 .upper {
  display:flex;
  justify-content: space-between;
  color: #8c8888;
  margin: 10px;
}

.post1 .upper img {
  height: 40px;
  width: auto;
  margin-top: auto;
}

.post1 .inside img{
  width: 700px;
  height: auto;
}

.post1 .text {
  text-align: left;
  margin: 10px;
  font-size: 25px;
}

.post1 .text img {
  width: 100px;
  height: auto;
}

#buttonR{
  margin-top: 15%;
  background-color: #0080ff;
}
</style>