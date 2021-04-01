$(document).ready(function () {
    var retrievedObject = localStorage.getItem("user1");
    if(!retrievedObject){
      var user1 = {
        id : 1,
        name: "Mohammed",
        userName: "MM",
        password: "123456",
        image: "profile.jpg",
        posts : 1,
        post1 : "Mohammed 44aasd"
      };
      localStorage.setItem("user1", JSON.stringify(user1));
    }

    for (var i = 1; i <= 30; i++) {
        document.getElementById("day").innerHTML += `<option>${i}</option>`
    }


    for (var i = 1901; i <= 2021; i++) {
        document.getElementById("year").innerHTML += `<option>${i}</option>`
    }


    $("input, option, select").click(function () {
        if ($("#usr").val() !== "" && $("#phon").val() !== "" && $("#month").val() !== "Month" && $("#day").val() !== "Day" && $("#year").val() !== "Year") {

            if (typeof ($("#usr").val() == "string" && typeof ($("#phon").val()) === number)) {
                $("#next").removeClass("disabled")

            }
        } else {
            $("#next").addClass("disabled")

        }
    })
    $("#usr").keyup(function(){
        f=1
        var username = $("#usr").val()

        for (const property in window.localStorage) {
            if (property === username) {
                f = 0
            }
        }
        if(f == 0){
            console.log("s")
        
            $("#nameValid").text("name is exsisted chose anther name")
        }else{
            console.log("name not fond")
            $("#nameValid").text("")
        }
    })
    
    $("#next").click(function () {
      
        var f = 1
        if ($("#next").hasClass("disabled")) {
        } else {
            var username = $("#usr").val()
            var retrievedObject;
            var counter = 1 ;
            for (let i = 1; i <= localStorage.length; i++) {
                if (localStorage.getItem("user"+i)) {
                    retrievedObject = JSON.parse(localStorage.getItem("user" + i));
                    counter++;
                    if (retrievedObject.userName === username) {
                        f = 0
                        $("#nameValid").text("name is exsisted chose anther name")
                        break;
                    }
                }
            }
           
            if (f == 1) {
                userInfo = {
                    id : counter,
                    name: $("#phon").val(),
                    userName: username,
                    password: $("#pass").val(),
                    image: "profile.jpg",
                    posts : 0,
                    //some data
                    userdayOfbairth: $("#day").children("option:selected").val(),
                    userMonthOfbairth: $("#month").children("option:selected").val(),
                    userdYearOfbairth: $("#year").children("option:selected").val()
                }
                localStorage.setItem("user"+counter, JSON.stringify(userInfo));
                //window.location.assign("../homePage/homePage.html")
                $(location).attr("href", "../homePage/homePage.html?ID=" + counter);
            }
        }

    })
    console.log(typeof (window.localStorage))

    for (const property in window.localStorage) {
        console.log(`${property}`);
    }


})

