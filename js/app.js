$(window).scroll(scrollFunction);

function scrollFunction(){
    if ($(window).scrollTop() > 400){
        $("#go-top-button").show();
    }
    else{
        $("#go-top-button").hide();
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $(window).scrollTop(0);
}