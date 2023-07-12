function onDropdownChange() {
  var dropdown = document.getElementById('wordDropdown');
  var selectedWord = dropdown.options[dropdown.selectedIndex].value;
  var imageUrl = getImageUrl(selectedWord);

  var image = document.getElementById('wordImage');
  image.src = imageUrl;
  image.style.display = imageUrl ? 'block' : 'none';
}

function getImageUrl(word) {
  var imagePath = 'https://MrWrEv.github.io/edit/main/images/';
  var imageExtension = '.svg';
  
  return imagePath + word + imageExtension;
}
