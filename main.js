document.addEventListener('DOMContentLoaded', function() {
    var fileInput = document.getElementById('fileInput');
    var videoPlayer = document.getElementById('videoPlayer');
    var playButton = document.getElementById('playButton');
    var pauseButton = document.getElementById('pauseButton');
    var volumeSlider = document.getElementById('volumeSlider');
    var loadingMessage = document.getElementById('loadingMessage');
  
    fileInput.addEventListener('change', function(e) {
      var file = e.target.files[0];
      if (file && file.type.startsWith('video/')) {
        var fileURL = URL.createObjectURL(file);
        videoPlayer.src = fileURL;
        showLoadingMessage();
      } else {
        alert('Por favor, seleccione un archivo de vídeo válido.');
      }
    });
  
    playButton.addEventListener('click', function() {
      videoPlayer.play();
    });
  
    pauseButton.addEventListener('click', function() {
      videoPlayer.pause();
    });
  
    volumeSlider.addEventListener('input', function() {
      videoPlayer.volume = volumeSlider.value;
    });
  
    videoPlayer.addEventListener('loadedmetadata', hideLoadingMessage);
  
    function showLoadingMessage() {
      loadingMessage.style.display = 'block';
    }
  
    function hideLoadingMessage() {
      loadingMessage.style.display = 'none';
    }
  });
  