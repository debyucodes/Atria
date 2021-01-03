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

// Send form and print confirmation page
app.sendForm = () => {
  $('#sendOrder').on('click', function(e){
    e.preventDefault();
    $('.orderDetails').hide();
    // Print confirmation page
    $('.confirmation').show();
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

// app.secondMenu = () => {
//   $('.secondMenu').hover(function(){
//     console.log('hi');
//     $(this).next('ul').slideToggle();
//   })
// }

// Circle hover function

app.circleHover = () => {
  $('.circleText').find('li').mouseenter(function(){
    $('.hoverText').addClass('hide');
    $('.hide').hide();
    $(this).next('.hide').fadeIn(400);
    // $(this).css('color', 'red');
  }
  // , function() {
  //   $(this).css('color', 'black');
  // }
  )

}


// Initialize App
app.init = () => {
  app.menu();
  app.secondMenu();
  app.next();
  app.sendForm();
  app.circleHover();
}

// Document ready!
$(document).ready(function(){
  app.init();
})