// Namespace object
const app = {}

// ~~~~~~~~~~~~~~~
// ~~ORDER FORM~~~
// ~~~~~~~~~~~~~~~

// Print order details on second page
app.showDetails = () => {
  $('.orderDetails').show();
}

// Next page
app.next = () => {
  $('#next').on('click', function(e){
    e.preventDefault();
    $('.orderForm').empty();

    app.showDetails();
  })
}

// ~~~~~~~~~~~~~~~~~~
// ~~DROP DOWN MENU~~
// ~~~~~~~~~~~~~~~~~~
app.menu = () => {
  $('.dropDown').hover(function() {
    $(this).find('ul').slideToggle(0);
  })
}

// burger menu
app.burger = () => {
  $('#burger').click(function(){
    $('.mobileMenu').slideToggle();
  })
}

// Circle hover function

app.circleHover = () => {
  $('.circleText').find('li').mouseenter(function(){
    $('.hoverText').addClass('hide');
    // $('circle-logo').hide();
    $('.hide').hide();
    $(this).next('.hide').fadeIn(400);
    // $(this).css('color', 'red');
  }
  )

}


// Initialize App
app.init = () => {
  app.menu();
  // app.next();
  // app.sendForm();
  app.circleHover();
  app.burger();
}

// Document ready!
$(document).ready(function(){
  app.init();
})