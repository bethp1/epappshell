//Globals
var currentUser = null;

$(document).ready(function() {
    toggleLoginLogoffItems(false);

    $("#loginPageSignUpLink").on("click",function(){

            $("#signupNavItem").click();
    });
});


function toggleLoginLogoffItems(loggedin) {
    if(loggedin == true){
        $('.loggedOn').show();
        $('.loggedOff').hide();
        
    } else {// login = false 
        $('.loggedOn').hide();
        $('.loggedOff').show();
    }
}

$("#manageAccountNavItem").on("click", function(){

    $("#manageUsername").val(currentUser.username);
    $("#manageName").val(currentUser.name);
    $("#manageEmail").val(currentUser.email);
    $("#manageid").val(currentUser.ID);

});

$("#Modal").on("click", function(){

    $("#changePasswordUsername").val(currentUser.username);
})

$('#logoutNavItem').on("click", function() {
    currentUser = null;
    toggleLoginLogoffItems(false);
    setCookie("token","",-1);
});




$('#signUpButton').on('click', function() {
    if($('#signUpPassword').val() != $('#signUpConfirmPassword').val()) {
        alert("passwords must match");
         // evt.preventDefault();
        return ;
    }

    $.ajax({
        url: 'signup.php',
        type: 'POST',
        data:	{
                    username:   $("#signUpUsername").val(), 
                    name:       $("#signUpName").val(),
                    email:      $("#signUpEmail").val(),
                    password:   $("#signUpPassword").val()
                },
        dataType: 'html',
        success:	function(data){

                        try {
                            data = JSON.parse(data);
                            alert("success");
                            currentUser = data.user; // set the currentUser to the global variable
                             $("#signUpUsername").val("");
                             $("#signUpName").val("");
                             $("#signUpEmail").val("");
                             $("#signUpPassword").val("");
                             $("#signUpConfirmPassword").val("");
                             $("#login_user").text("Welcome, " + currentUser[0].username + "!");
                            
                            toggleLoginLogoffItems(true);
                            $("#homeNavItem").click();
                        } catch (ex) {
                            alert(ex);
                        }
                    },
        error: 	    function (xhr, ajaxOptions, thrownError) {
                        alert("-ERROR:" + xhr.responseText + " - " + 
                        thrownError + " - Options" + ajaxOptions);
                    }
    });    		
});

 $('#login_submit').on('click', function()
{
    if ($('#rememberMe').is(':checked')) 

        var loginToken = generateRandomToken(20);
       
    $.ajax({
        url: 'login.php',
        type: 'POST',
        data: {

                username: $("#username").val(),
                password: $("#pwd").val(),
                rememberMe: $('#rememberMe').is(':checked'),
               
                loginToken: loginToken
                
            },
        datatype: 'html',
        success: function(data){
            try{
                data = JSON.parse(data);
                alert("success");
                currentUser = data.user[0]; // set the currentUser to the global variable
                  $("#username").val("");
                  $("#pwd").val("");
                 
                  
                  if ($('#rememberMe').is(':checked')) 
                        setCookie("token",loginToken,20);
                    
                 $("#login_user").text("Welcome, " + currentUser.username + "!");
                
                    

                 toggleLoginLogoffItems(true);
                $("#homeNavItem").click();
             } catch (ex) {
                        alert(ex);
                    }
                },
     error: 	    function (xhr, ajaxOptions, thrownError) {
                    alert("-ERROR:" + xhr.responseText + " - " + 
                    thrownError + " - Options" + ajaxOptions);
                }


    });
   
    

});

$(document).ready(function() {

    if(getCookie('token')) {

        AutoLogin(getCookie('token'));
    }else{

        toggleLoginLogoffItems(false);
    }


});

function AutoLogin(loginToken){



    $.ajax({

       url: 'autoLogin.php',
        type: 'POST',
        data: {

                loginRememberToken: loginToken
             },
        datatype: 'html',
         
        success: function(data){
            try{
                data = JSON.parse(data);
               //alert("success");
                currentUser = data.user[0]; // set the currentUser to the global variable
                
                
               
                $("#username").val("");
                $("#pwd").val("");
                $("#login_user").text("Welcome, " + currentUser.username + "!");
                
                if ($('#rememberMe').is(':checked')) 

                    setCookie("token", loginToken, 7);

                    toggleLoginLogoffItems(true);
                $("#homeNavItem").click();
             } catch (ex) {
                        alert(ex);
                    }
                },
     error: 	    function (xhr, ajaxOptions, thrownError) {
                    alert("-ERROR:" + xhr.responseText + " - " + 
                    thrownError + " - Options" + ajaxOptions);
                }


    });


};

$('#manage_Update').on('click',function()
{
    $.ajax({
        url: 'manageAccount.php',
        type: 'POST',
        data: {

                username: $("#manageUsername").val(),
                email: $("#manageEmail").val(),
                name: $("#manageName").val(),
                id: $("#manageid").val()


        },
        datatype: 'html',
        success: function(data){
            try{
                data = JSON.parse(data);
                alert("success");
                currentUser = data.user[0]; // set the currentUser to the global variable
                toggleLoginLogoffItems(true);
                $("#manageUsername").val("");
                $("#manageEmail").val("");
                $("#manageName").val("");
                $("#manageid").val("");
                
                
                $("#login_user").text("Welcome, " + currentUser.username + "!");
                
                $("#homeNavItem").click();
             } catch (ex) {
                        alert(ex);
                    }
                },
     error: 	    function (xhr, ajaxOptions, thrownError) {
                    alert("-ERROR:" + xhr.responseText + " - " + 
                    thrownError + " - Options" + ajaxOptions);
                }


    });

});

$('#savePassword').on('click',function(){
if($('#changePasswordNewPassword').val() != $('#changePasswordConfirmNewPassword').val()) {
    alert("passwords must match");
     // evt.preventDefault();
    return ;

}
    $.ajax({
        url: 'changePassword.php',
        type: 'POST',
        data: {

                username: $('#changePasswordUsername').val(),
                password: $("#changePasswordNewPassword").val(),
                oldPassword: $("#changePasswordOldPassword").val()
                


        },
        datatype: 'html',
        success: function(data){
            try{
                data = JSON.parse(data);
                alert("success");
                currentUser = data.user[0]; // set the currentUser to the global variable
                toggleLoginLogoffItems(true);
                $("#changePasswordOldPassword").val("");
                $("#changePasswordNewPassword").val("");
                $("#changePasswordUsername").val("");
                
                
                
                
                
                $("#homeNavItem").click();
             } catch (ex) {
                        alert(ex);
                    }
                },
     error: 	    function (xhr, ajaxOptions, thrownError) {
                    alert("-ERROR:" + xhr.responseText + " - " + 
                    thrownError + " - Options" + ajaxOptions);
                }


    });

});
function generateRandomToken(n) {

    var  text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    var dayte = new Date();

    var dateInMillseconds = dayte.getTime();

    for(var i = 0; i <n; i++) {

        text += possible.charAt(Math.floor(Math.random() * possible.length));

        return dateInMillseconds + text;
        
         
       
    }
    
    

}
 

function getCookie(cookieName) {
    if(document.cookie) {
        var cookiesArray = document.cookie.split("; ");
        for(var i = 0; i < cookiesArray.length; i++) {
            if(cookiesArray[i].split("=")[0] == cookieName) {
                return unescape(cookiesArray[i].split("=")[1]);			}
        }
    }
}



function setCookie(cookieName, cookievalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));

    var expires = "expires=" + d.toGMTString();
    document.cookie = cookieName+ "=" + cookievalue+ "; " + expires;

    alert("remember me");
}
 


