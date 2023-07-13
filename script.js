function onDropdownChange() {
  var dropdown = document.getElementById('wordDropdown');
  var selectedWord = dropdown.options[dropdown.selectedIndex].value;
  var imageUrl = getImageUrl(selectedWord);

  var previewImage = document.getElementById('previewImage');
  var image = document.getElementById('wordImage');
  
  previewImage.src = imageUrl;
  image.src = imageUrl;

  previewImage.style.display = imageUrl ? 'block' : 'none';
  image.style.display =  'none';
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


