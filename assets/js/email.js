function send() {
    console.log('hello')
    setTimeout(function() {
      window.open("mailto:" + 'ajlehechka@gmail.com; ryan.a.bahn@gmail.com' 
      + "?subject=" + document.getElementById('subject').value 
      + "&body=" + "Hi, this is " + document.getElementById('name').value + ". \n" + document.getElementById('message').value);
    }, 320);
  }