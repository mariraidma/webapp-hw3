import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {},
    state: {
        posts: [
            { id: 1, like: 0, time: "Sep 10, 2021, 4:30", text: "Beautiful sunset!", img: require("../assets/Firstpic.jpeg") },
            { id: 2, like: 0, time: "Sep 10, 2021, 4:44", text: "The purpouse of our lives is to be happy.", img: " " },
            { id: 3, like: 0, time: "Sep 11, 2021, 12:00", text: "The best vacation ever after quarantine :)", img: require("../assets/Thirdpic.jpeg") },
            { id: 4, like: 0, time: "Sep 10, 2021, 4:30", text: "Beautiful sunset!", img: require("../assets/Firstpic.jpeg") },
            { id: 5, like: 0, time: "Sep 11, 2021, 14:14", text: "This is a totally random post!", img: require("../assets/Fourthpic.jpeg") },
            { id: 6, like: 0, time: "Dec 1, 2021, 0:00", text: "This one as well, but it is a bit different.", img: require("../assets/Fifthpic.jpeg") },
            { id: 7, like: 0, time: "Dec 11, 2021, 4:01", text: "The last 2 posts are very random, did not leave a like!", img: require("../assets/sixthpic.png") },
            { id: 8, like: 0, time: "Dec 14, 2021, 17.25", text: "Please like this post, trying to break a world record!", img: require("../assets/seventhpic.jpeg") },
            { id: 9, like: 0, time: "Dec 17, 2021, 11:51", text: "I liked a post which wanted to break a world record, hope we manage to do it!", img: require("../assets/eightpic.webp") },
            { id: 10, like: 0, time: "Dec 21, 2021, 1:00", text: "I just recently started learning webdev.", img: require("../assets/ninthpic.jpeg") },
            { id: 11, like: 0, time: "Dec 17, 2021, 11:51", text: "I liked a post which wanted to break a world record, hope we manage to do it!", img: require("../assets/tenpic.jpeg") },
            { id: 12, like: 0, time: "Dec 21, 2021, 1:00", text: "I just recently started learning webdev.", img: require("../assets/elevenpic.jpeg") },
            { id: 13, like: 0, time: "Dec 30, 2021, 23:59", text: "This is the last post of the feed!", img: require("../assets/12pic.jpeg") },
            { id: 14, like: 0, time: "Dec 31, 2021, 23:59", text: "Happy New Year", img: require("../assets/13pic.jpeg") },
        ],
    },
    mutations: {
        like(state,postid){
            state.posts.forEach((post, i) => {
                if (post.id == postid){
                    state.posts[i].like++
                    return
                }
            })
        },

        resetLikes(state){
            state.posts.forEach(post =>{
                post.like = 0})
        }
    },
    getters: {
        getPosts: state => state.posts
    },
    actions: {
        likeAction: ({commit}, payload) => {
            commit('like',payload.postid)
        },
        resetAction: ({commit}) =>{
            commit('resetLikes')
        }
    }
})