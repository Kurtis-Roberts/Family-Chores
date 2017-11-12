$('#myModal').on('shown.bs.modal', function() {
    $('#myInput').trigger('focus')
})




function newMember(event) {
    event.preventDefault();

    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var phoneNum = $("#phone-num").val();
    var gender = $("#gender").val();
    var age = $("#age").val();
    var familyRole = $("#family-role").val();
    var imgUrl = $("#img-url").val();

    var newPerson = '<div class="col-6 col-sm-3 placeholder text-center"><img id="gender-border" src="' + imgUrl + '" width="200" height="200" class="rounded-circle" alt="Generic placeholder thumbnail"><h4>' + firstName + '</h4><div class="text-muted text-center">4 Active Chorse</div></div>'
    $("#your-family").append(newPerson);
    console.log(gender)
    if (gender === "Male") {
        $("#gender-border").addClass("male");
    } else if (gender === "Female") {
        $("#gender-border").addClass("female");
    }

    clearForm();

}



function clearForm() {
    $("#first-name").val("");
    $("#last-name").val("");
    $("#phone-num").val("");
    $("#gender").val("");
    $("#age").val("");
    $("#family-role").val("");
    $("#img-url").val("");

}



$("#family-submit").on("click", newMember);
$("#new-member").on("click", function(event) {
    event.preventDefault();
})