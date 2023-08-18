function showAlert() {
    var myText = "you are successfully logged in now go back";
    alert (myText);
}
function showBook() {
    var myText = "Booked Successfully";
    alert (myText);
}
// Form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const number = document.getElementById('number').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;

  
  console.log('Name:', name);
  console.log('Address:', address);
  console.log('Number:', number);
  console.log('Age:', age);
  console.log('Gender:', gender);

  // Reset the form
  contactForm.reset();
});
