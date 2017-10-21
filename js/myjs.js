$(document).ready(function ()
{
    $("#error-container").hide();
    $("#success-container").hide();
    $("#login-btn").on('click', login_click);
});

function login_click()
{
    alert("There!");

    var eml = $('#email').val();
    var pas = $('#password').val();

    $.ajax({
        url: '../json/sampleLogin.json',
        dataType: 'json',
        success:
            function (data)
            {
                var usn = '', pwd = '';

                $.each(data.credentials, function (key, val)
                {

                    usn = (val.usn);
                    pwd = (val.pwd);

                    alert("usn : " + usn);
                    alert("pwd : " + pwd);
                    alert("eml : " + eml);
                    alert("pas : " + pas);

                });


                if (usn == eml && pwd == pas)
                {
                    alert("Success");
                    $("#success-container").show();
                    alert("Success");
                }

                else
                {
                    alert("Retry");

                    setTimeout(function ()
                    {
                        $("#error-container").show();
                        alert('Error');
                    }, 1000);

                }

            }

        ,
        statusCode: {
            404:

                function ()
                {
                    alert('There was a problem with the server.  Try again soon!');
                }
        }
    });

}
