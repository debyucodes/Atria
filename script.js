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





// Initialize App
app.init = () => {
  app.next();
  app.sendForm();
}

// Document ready!
$(document).ready(function(){
  app.init();
})