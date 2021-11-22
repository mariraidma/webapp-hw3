<template>
  <header>
    <nav>
      <div>
        <img src="/images/postit.png" alt="postit">
      </div>
      <div>
        <div class="search-container">
          <input type="text"><button>Search</button>
        </div>
      </div>
      <div id="user">
        <div class="dropdown">
          <button @click="submit()" class="dropbtn"><img src="https://www.vhv.rs/dpng/d/436-4363443_view-user-icon-png-font-awesome-user-circle.png"></button>
          <div id="myDropdown" class="dropdown-content">
            <a href="#">John Doe</a>
            <a href="#">john.doe@example.com</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    console:("test")
  }

}

</script>

<style scoped>
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

.dropbtn {
  background-color: #328ed6;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
  background-color: #2980B9;
}

.dropdown {
  float: right;
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  right: 0;
  z-index: 1;
}

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

</style>