var path = location.hostname;

$(document).ready(function () {
    $("#username").val('');
    $("#password").val('');
});


login = function () {
    $.ajax({
        url: 'loginVerify/',
        type: 'post',
        dataType: 'json',
        data: JSON.stringify({ 'username': $("#username").val(), 'password': $("#password").val() }),
        success: function (data) {
            if (data.success == true) {
                window.location='class/';
            } else {
                alert("Please check Username/Passowrd");
            }
        }
    });
}
