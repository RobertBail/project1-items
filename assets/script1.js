var createUserBtn = document.querySelector("#createuser");

function createUser(username, password) {
var username = document.getElementById("username");
var password = document.getElementById("password");  
    
    var userInfo = {
      username: username.value.trim(),
      password: password.value.trim()
    };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    console.log(userInfo);
  }
  //I put in console.log to indicate if it's working/saving properly, probably take out when submitting?

  function getUser(username, password) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username && users[i].password === password) {
        return users[i];
      }
    }
   
  }
  
  const users = [];

  function validateLogin() {

  }