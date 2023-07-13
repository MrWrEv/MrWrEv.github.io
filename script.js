function onDropdownChange() {
  var dropdown = document.getElementById('wordDropdown');
  var selectedWord = dropdown.options[dropdown.selectedIndex].value;
  var imageUrl = getImageUrl(selectedWord);

  var previewImage = document.getElementById('previewImage');
  var image = document.getElementById('wordImage');

  previewImage.src = imageUrl;
  image.src = imageUrl;

  previewImage.style.display = imageUrl ? 'block' : 'none';
  image.style.display = 'none';
}

function getImageUrl(word) {
  var imagePath = 'https://raw.githubusercontent.com/MrWrEv/MrWrEv.github.io/main/images/';
  var imageExtension = '.svg';

    return imagePath + word + imageExtension;
}

function downloadImage() {
  var image = document.getElementById('previewImage');
  var imageUrl = image.src;

  fetch(imageUrl)
    .then(response => response.blob())
    .then(blob => {
      var anchor = document.createElement('a');
      var url = URL.createObjectURL(blob);
      anchor.href = url;
      anchor.download = 'image.svg';
      anchor.click();
      URL.revokeObjectURL(url);
    });
}
