var validFields = true;
var gdpr_checkbox = document.querySelector("input[name=gdpr_check]");

function validateForm() {
  var name_input = document.getElementById("user_name");
  var email_input = document.getElementById("user_email");
  var form_message_input = document.getElementById("form_message");

  validateField(name_input);
  validateField(email_input);
  validateField(form_message_input);
}

function validateField(field) {
  if (!field.value) {
    field.classList.add('error');
    validFields = false;
  } else {
    field.classList.remove('error');
    validFields = true;
  }
}

var form = document.getElementById("contact_form");

form.addEventListener('submit', event => {
  event.preventDefault();

  validateForm();

  if (validFields) {
    var elem = document.querySelectorAll('.modal');
    openModal();
  }
});

gdpr_checkbox.addEventListener( 'change', function() {
  if(this.checked) {
    document.querySelector(".submit_form_input").disabled=false;
  } else {
    document.querySelector(".submit_form_input").disabled=true;
  }
});


function openModal() {
  const elem = document.getElementById('modal1');
  const instance = M.Modal.init(elem, {dismissible: false});
  instance.open();
}

function submitForm() {
  console.log("form submitted")
  form.submit();
}
