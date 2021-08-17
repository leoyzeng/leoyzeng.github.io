var realPassword = "1cyM⌬n";

// check password
// only frontend
$(document).ready(function(){
    $("#submit").click(function(){
        var enteredPassword = $("#password").val();
        if(enteredPassword === realPassword){
            loadContent();
        }
        else{
            incorrectPassword();
        }
    });
});

var checkPassword =  $("#check-password");

function loadContent(){
    checkPassword.text("correct password");
    checkPassword.css("color", "green");

    $("#content").css("display", "inline");
}

function incorrectPassword(){
    checkPassword.text("wrong password");
    checkPassword.css("color", "red");
}