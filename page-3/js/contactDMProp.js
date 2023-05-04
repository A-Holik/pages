// additional properties for contact subpage in darkmode switch
// this is a great example how u can use localstorage from one file to other

const sendButton = document.querySelector('#send-button');

  if (darkMode === 'enabled') {
    sendButton.classList.remove('sb-light');
    sendButton.classList.add('sb-dark');
  } else {
    sendButton.classList.remove('sb-dark');
    sendButton.classList.add('sb-light');
  }