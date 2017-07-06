<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" >
    <h1 class="title">
       USERS counter:{{$store.state.counter}}
    </h1>
    <ul class="users">
      <li v-for="(user, index) in $store.state.users" class="user" :key="index">
        <nuxt-link :to="{ name: 'id', params: { id: index }}">
          {{user.name}}
        </nuxt-link>
      </li>
    </ul>
    <a href="javascript:void(0)" @click="add">add</a><br>
    <a href="javascript:void(0)" @click="show">show</a>
  </section>
</template>

<script>
import axios from '~plugins/axios'

export default {
  data () {
    // console.log(this.$store)
    return {
      title: 'Hello World!',
      users: [{name: 'www'}]
    }
  },
  async asyncData (context) {
    // console.log(context)
    let { data } = await axios.get('/api/users')
    // store.commit('setUsers', data)
    return {
      users: data
    }
  },
  async fetch ({ store, params }) {
    let { data } = await axios.get('/api/users')
    store.commit('setUsers', data)
  },
  head () {
    return {
      title: 'Users',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
  methods: {
    show () {
      alert(123)
    },
    add () {
      this.$store.commit('increment')
    }
  }

}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
