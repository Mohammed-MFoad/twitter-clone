var retrievedObject = localStorage.getItem("user1");
if(!retrievedObject){
  var user1 = {
    id : 1,
    name: "Mohammed",
    userName: "MM",
    password: "123456",
    image: "profile.jpg",
    posts : 1,
    post1 : "new Post"
  };
  localStorage.setItem("user1", JSON.stringify(user1));
}
// var user2 = {
//     id : 2,
//     name: "Hamada",
//     userName: "ham",
//     password: "123",
//     image: "alahly.png",
//   };
//   var user3 = {
//     id : 3,
//     name: "menna",
//     userName: "men",
//     password: "166",
//     image: "cat.png",
//   };

// localStorage.setItem("user2", JSON.stringify(user2));
// localStorage.setItem("user3", JSON.stringify(user3));

// var retrievedObject = localStorage.getItem("user1");
// retrievedObject = JSON.parse(retrievedObject);

// console.log("retrievedObject: ",retrievedObject );
// console.log(retrievedObject.id);

function checkLogin() {
  var userNameFromWindow = $("#userInput")[0].value;
  var passwordFromWindow = $("#password")[0].value;

  var retrievedObject;
  for (let i = 1; i <= localStorage.length; i++) {
    if (localStorage.getItem("user"+i)) {
      retrievedObject = JSON.parse(localStorage.getItem("user" + i));
      if (userNameFromWindow == retrievedObject.name || userNameFromWindow == retrievedObject.userName)  
       {debugger
         if (passwordFromWindow == retrievedObject.password) {
           $(location).attr("href", "../homePage/homePage.html?ID=" + retrievedObject.id);
           break
         }
         else {
          alert("Login Failed");
          break
        }

      }
   
}
if (i == localStorage.length) {
  alert("User Name are not exist");
  break
}
  }

  
  // if (
  //   (userNameFromWindow == retrievedObject.name || userNameFromWindow == retrievedObject.userName) &&
  //   passwordFromWindow == retrievedObject.password
  // ) {
  //     $(location).attr("href", "../homePage/homePage.html?ID=" + retrievedObject.id);
  // } else {
  //   alert("Login Failed");
  // }
}
