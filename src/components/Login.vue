<template>
  <div class="container">
    <div class="login-flexbox">
      <h2 id="para1">Welcome to PostIt</h2>
      <p class="login-text"><a href="../webdv-wa/index.html">Create an account</a></p>
      <p>Or</p>
      <p>Please log In</p>
      <form>
        <label>
          <input class="login-textbox" type="text" placeholder="E-mail" >
        </label>

        <label>
          <input class="login-textbox" type="password" placeholder="Password">
        </label>
      </form>
      <br>
      <button class="website-button" type="submit" @click="login">Log In</button>
      <p><a href="" target="_blank">Forgot Password?</a></p>
      <div class="postitimage">
        <img src="../assets/postit.png" alt="PostIt logo" style="width:100px;height:100px;">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    login() {
      this.$router.push("/post")
    }
  }

}
</script>

<style scoped>
body {background-color: #1e90ff;}
#para1 {
  font-family:"Times New Roman", serif;
  color: blue;
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.postitimage {
  position: relative;
  top: -390px;
  right: 160px;
}

.login-text ~ p{
  font-family:"Times New Roman", serif;
}

.login-flexbox {
  height: 325px;
  width: 325px;
  background: #fff;
  padding: 50px;
  border-radius: 10px;
  position: relative;
  text-align: center;
  border: 5px outset lightgray;
}

.login-textbox {
  font-family:"Times New Roman", serif;
  box-sizing: border-box;
  border: 2px solid rosybrown;
  height: 30px;
  margin: 3px 0;
  border-radius: 5px;
}

.website-button {
  font-family:"Times New Roman", serif;
  background-color: DodgerBlue;
  color: White;
  padding: 5px 30px;
  text-align: center;
  font-size: 15px;
}

button:hover {
  background-color: deepskyblue;
}

p + p {
  color: darkblue;
}
</style>