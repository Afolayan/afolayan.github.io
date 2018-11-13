$(document).on('click', '.submit-form', function () {
    
    var messageBody = $("#message").val();
    var email = $("#email").val();
    var hireDate = $("#hire-date").val();
    var subject = $('#subject').find(":selected").text();
    
    window.location.href = "mailto:afolayanseyi@gmail.com?cc=" + email + "&subject=" + subject + "&body=" + messageBody+"\nStart Date=>"+hireDate;
});