// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCAzQ8EnCrnBWb6mvxCnC49F1NVdnyXrhE",
  authDomain: "mw-landing-site.firebaseapp.com",
  projectId: "mw-landing-site",
  storageBucket: "mw-landing-site.appspot.com",
  messagingSenderId: "143218941547",
  appId: "1:143218941547:web:3dc9366a2b7f63ffd0db2e",
  measurementId: "G-LFB9KJEXNV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var dbref = firebase.database().ref('email-signup-entries');

// Listen for form submit
document.getElementById('header-email-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // Get values
  var email = getEmailInputValFrom('header');
  
  // Save values
  if (email) {
    saveToFirebase(email, 'header');
  }
});

document.getElementById('cta-section-email-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // Get values
  var email = getEmailInputValFrom('cta-section');
  
  // Save values
  if (email) {
    saveToFirebase(email, 'cta-section');
  }
});

document.getElementById('header-email-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // Get values
  var email = getEmailInputValFrom('footer');
  
  // Save values
  if (email) {
    saveToFirebase(email, 'footer');
  }
});


//document.getElementById('footer-email-form').addEventListener('submit', submitForm);

function saveToFirebase(email, formId) {
  var emailObject = {
    email: email
  };
  
  dbref.push().set(emailObject)
    .then(function(snapshot) {
      success(formId);
    }, function(error) {
      console.log('error' + error);
      //error(); //some error method
    });
}

function success(id) {
  // Show alert
  document.getElementById(id+'-alert').style.display = "block";
  document.getElementById(id+'-email-form').reset();
};

// Function to get form values
function getEmailInputValFrom(id) {
  return document.getElementById(id+'-email').value;
};

/*function submitForm(e) {
  e.preventDefault();
  
  // Get values
  var email = getInputVal('email');
  
  // Save values                        
  saveToFirebase(email);
};*/
