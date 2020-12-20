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

// Circle hover function
app.circleHover = () => {
  $('.circleText').find('li').hover(function(){
    $('.hoverText').addClass('hide');
    $(this).next('.hide').show();
  }, function(){
    $('.hoverText').removeClass('hide');
    $(this).next('.hide').hide();
    console.log('bye');
  })
}






// Initialize App
app.init = () => {
  app.next();
  app.sendForm();
  app.circleHover();
}

// Document ready!
$(document).ready(function(){
  app.init();
})