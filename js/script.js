/// <reference types="../@types/jquery" />



/*leftmenu*/

$(".openNav").on('click', function() {
    $("#leftMenu").animate({ width: '250px' }, 50)
    $("#home-content").animate({ marginLeft: '250px' }, 50)
})

$(".closebtn").on('click', function() {
    $("#leftMenu").animate({ width: '0px' }, 50)
    $("#home-content").animate({ marginLeft: '0px' }, 50)
})



/*scrollmenu*/
$("#leftMenu a").on('click', function() {

    var sectionId = $(this).attr("href");

    var positionOfSection = $(sectionId).offset().top;

    $("html , body").animate({ scrollTop: positionOfSection }, 2000);

})





$('#sliderDown .toggle').on('click', function() {
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});



/*counter*/


window.onload = function() {

    countDownToTime("15 october 2024 10:00:00");
}

function countDownToTime(countTo) {

    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime() / 1000);

    let now = new Date();
    now = (now.getTime() / 1000);

    timeDifference = (futureDate - now);

    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - (days * (24 * 60 * 60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let secs = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)


    setInterval(function() { countDownToTime(countTo); }, 1000);
}



/*textarea*/

var maxLength = 100;
$('textarea').on('input', function() {
    var length = $(this).val().length;
    var amountLeft = maxLength - length;
    if (amountLeft <= 0) {
        $("#chars").text("Your available characters have finished");
    } else {
        $("#chars").text(amountLeft);
    }
});