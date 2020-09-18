// Namespace object
const app = {}

// Print order details on second page
app.showDetails = () => {
  $('.orderDetails').show();
}

// Print confirmation


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
    $('.confirmation').show();
  })
}

// Initialize App
app.init = () => {
  app.next();
  app.sendForm();
}

// Document ready!
$(document).ready(function(){
  app.init();
})