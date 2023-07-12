function onDropdownChange() {
  var dropdown = document.getElementById('wordDropdown');
  var selectedWord = dropdown.options[dropdown.selectedIndex].value;
  var imageUrl = getImageUrl(selectedWord);

  var image = document.getElementById('wordImage');
  image.src = imageUrl;
  image.style.display = imageUrl ? 'block' : 'none';
}

function getImageUrl(word) {
  var imageUrls = {
    Word1: 'URL_OF_IMAGE_1',
    Word2: 'URL_OF_IMAGE_2',
    // Add more words and their corresponding image URLs here
  };

  return imageUrls[word] || '';
}
