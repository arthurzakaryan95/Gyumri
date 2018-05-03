////////////////////
// btn scroll up  //
////////////////////

var btnTop = $(".btnTop");

$(window).on("scroll", function () {
    if ($(window).scrollTop() >= 20) {
        btnTop.fadeIn();
    } else {
        btnTop.fadeOut();
    }
});

$(btnTop).on("click", function () {
    $("html,body").animate({ scrollTop: 0 }, 900);
});

////////////////////
//   show forms    //
////////////////////

function showForm(event) {
    $(event.data.arg).fadeIn();
};
function hideForm(event) {
    $(event.data.arg).fadeOut();
};


function ajaxReg(data) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/users/regist', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            $('#regErr').text('Server error');
        };
        if (xhr.status === 200) {
            if (xhr.response) {
                if (JSON.parse(xhr.response).surname !== undefined) {
                    $('#userName').val('');
                    $('#userSurname').val('');
                    $('#userEmail').val('');
                    $('#userPassword').val('');
                    $('#passConfirm').val('');
                    $('#regErr').text('');
                    $("#regForm").hide('slow');
                    $('#userEmail').css("box-shadow", "none");

                    $('#user_info').text(`Registration Success!. Sign in to your account`);
                    setTimeout(function () {
                        $('#user_info').text('');
                    }, 5000);
                }
                if (JSON.parse(xhr.response).errmsg !== undefined) {
                    $('#userEmail').css("box-shadow", "0px 0px 80px red")
                    $('#regErr').text('Duplicate email error');
                }
            }
        } else {

            console.log(xhr.status + '-' + xhr.statusText);
        }
    }
};

$('#singIn').on('click', { arg: "#loginForm" }, showForm);
$('#singIn').on('click', { arg: "#regForm" }, hideForm);
$('#singUp').on('click', { arg: "#regForm" }, showForm);
$('#singUp').on('click', { arg: "#loginForm" }, hideForm);
$('#addNews').on('click', { arg: "#addForm" }, showForm);

$('#send').on('click', function () {
    event.preventDefault();
    if ($('#userName').val() &&
        $('#userSurname').val() &&
        $('#userEmail').val() &&
        $('input[name="gender"]:checked').val() &&
        $('#userPassword').val() &&
        (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test($('#userEmail').val())
    ) {
        if ($('#userPassword').val() === $('#passConfirm').val()) {
            var regData = {
                name: $('#userName').val(),
                surname: $('#userSurname').val(),
                email: $('#userEmail').val(),
                gender: $('input[name="gender"]:checked').val(),
                password: $('#userPassword').val()
            }
            ajaxReg(regData);


            $('#regErr').text('');
            $('#passConfirm').css("box-shadow", "none");
        } else {
            $('#regErr').text('Password and Confirmation do not match!');
            $('#passConfirm').css("box-shadow", "0px 0px 80px red")
        }
    } else {
        $('#regErr').text('Fill in all the fields and check the password and emaila');
    }
});


$('#login').on('click', function () {
    if($(!'#loginEmail').val() ||
            !$('#loginPassword').val()){
                event.preventDefault();
                $('#logErr').text('Email or Password entered incorrectly');
    }
});


function ajaxAdd(data) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/users/addnews', true);
    xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (xhr.status === 200) {
            console.log(xhr.response);
            if (xhr.response) {
                alert('Success!');
                $('#newsTitle').val('');
                $('#newsContent').val('');
                $("#addForm").hide('slow');
            }
        } else {
            console.log(xhr.status + '-' + xhr.statusText);
        }
    }
}

$('#add').on('click', function () {
    event.preventDefault();
    if ($('#newsTitle').val() &&
        $('#newsContent').val()
    ) {
        var addData = {
            Title: $('#newsTitle').val(),
            Content: $('#newsContent').val()
        }
        console.log(addData)
        ajaxAdd(addData);
        $('#addErr').text('');
    } else {
        $('#addErr').text('Fill in all the fields');
    }
});

$('.close>img').on('click', { arg: "#regForm" }, hideForm);
$('.close>img').on('click', { arg: "#loginForm" }, hideForm);
$('.close>img').on('click', { arg: "#addForm" }, hideForm);

// let title = document.getElementById('title').value;
// let mail = document.getElementById('mail').value;
// let message = document.getElementById('message').value;
// let contact = document.getElementById('contact');
//
// if(title === "" && mail === "" && message === ""){
//    document.getElementById('contact').disabled = true;
// }
