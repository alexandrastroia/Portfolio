$(document).ready(function () {

    /** BUTTON ON CLICK SCROLLING **/
    $("#pulsante1").click(function () {
        $('html,body').animate({
            scrollTop: $("#projects").offset().top
        }, 0);
    });

    $("#pulsante2").click(function () {
        $('html,body').animate({
            scrollTop: $("#contact").offset().top
        }, 0);
    });


    /** FORM VALIDATION **/
    function validateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test($email);
    }

    $("#submit").click(function () {
        var name = $("#name").val();
        var email = $("#email").val();
        var msg = $("#msg").val();

        if (name.length == "") {
            $("#p1").text("Please enter your name");
            $("#name").focus();
            return false;
        }

        else if (email.length == ""){
            $("#p2").text("Please enter your email");
            $("#email").focus();
            return false;
        }

        else if (!validateEmail(email)) {
            $("#p2").text("Please enter a valid email");
            $("#email").focus();
            return false;
        }

        else if (msg.length == "") {
            $("#p3").text("Please enter your message");
            $("#msg").focus();
            return false;
        }

        else {
            alert("Thank you for your message. You'll get a response in 24H!");
            return true;
        }
    })

});