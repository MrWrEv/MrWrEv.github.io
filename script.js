function onDropdownChange() {
  var dropdown = document.getElementById('wordDropdown');
  var selectedWord = dropdown.options[dropdown.selectedIndex].value;
  var imageUrl = getImageUrl(selectedWord);

  var image = document.getElementById('wordImage');
  image.src = imageUrl;
  image.style.display = imageUrl ? 'block' : 'none';
}

function getImageUrl(word) {
  var imagePath = 'https://raw.githubusercontent.com/MrWrEv/MrWrEv.github.io/main/images/';
  var imageExtension = '.svg';

  return imagePath + word + imageExtension;
}

function downloadImage() {
  var image = document.getElementById('wordImage');
  var imageUrl = image.src;

  var anchor = document.createElement('a');
  anchor.href = imageUrl;
  anchor.download = 'image.png';
  anchor.click();
}
