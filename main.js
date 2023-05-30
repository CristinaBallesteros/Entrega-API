document.addEventListener('DOMContentLoaded', function() {
    var fileInput = document.getElementById('fileInput');
    var video = document.getElementById('video');
    var play = document.getElementById('play');
    var pause = document.getElementById('pause');
    var volumeup = document.getElementById('volume+');
    var volumedown = document.getElementById('volume-');
    var loadingMessage = document.getElementById('loadingMessage');

    fileInput.addEventListener('change', function(e) {
      var file = e.target.files[0];
      if (file && file.type.startsWith('video/')) {
        var fileURL = URL.createObjectURL(file);
        video.src = fileURL;
        showLoadingMessage();
      } else {
        alert('El archivo selecionado no es válido.Por favor, seleccione un archivo de vídeo válido.');
      }
    });
  
    play.addEventListener('click', function() {
      video.play();
    });
  
    pause.addEventListener('click', function() {
      video.pause();
    });
  
    volumeup.addEventListener('click', function() {
      changeVolume(0.1);
    });

    volumedown.addEventListener('click', function() {
      changeVolume(-0.1);
    });

    function changeVolume(delta) {
      var newVolume = video.volume + delta;
      newVolume = Math.max(0, Math.min(1, newVolume)); 
      video.volume = newVolume;
    }
  
    video.addEventListener('loadedmetadata', hideLoadingMessage);
  
    function showLoadingMessage() {
      loadingMessage.style.display = 'block';
    }
  
    function hideLoadingMessage() {
      loadingMessage.style.display = 'none';
    }
  });
  