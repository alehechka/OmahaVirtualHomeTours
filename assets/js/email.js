const adamEmail = 'ajlehechka@gmail.com';
const ryanEmail = 'ryan.a.bahn@gmail.com';

const toEmails = [ryanEmail, adamEmail];

const mailto = toEmails.reduce((acc, email) => `${email}; ${acc}`, '')

send = () => {
    setTimeout(() => {
      window.open("mailto:" + mailto 
      + "?subject=" + document.getElementById('subject').value 
      + "&body=" + "Hi, this is " + document.getElementById('name').value + ". \n" + document.getElementById('message').value);
    }, 320);
  }