function onDropdownChange() {
  var dropdown = document.getElementById('wordDropdown');
  var selectedWord = dropdown.options[dropdown.selectedIndex].value;
  var imageUrl = getImageUrl(selectedWord);

  copyToClipboard(imageUrl);
  displayMessage('Image URL copied to clipboard!');
}

function getImageUrl(word) {
  var imagePath = 'https://raw.githubusercontent.com/MrWrEv/MrWrEv.github.io/main/images/';
  var imageExtension = '.svg';

  return imagePath + word + imageExtension;
}

function copyToClipboard(text) {
  var textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

function displayMessage(message) {
  var messageElement = document.getElementById('message');
  messageElement.textContent = message;
  messageElement.style.display = 'block';
  setTimeout(function() {
    messageElement.textContent = '';
    messageElement.style.display = 'none';
  }, 3000);
}
