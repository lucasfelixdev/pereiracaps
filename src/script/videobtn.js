


document.addEventListener("DOMContentLoaded", function () {
  const videoContainers = document.querySelectorAll(".video-container");

  videoContainers.forEach(container => {
    const video = container.querySelector("video");
    const playToggle = container.querySelector(".play-toggle");

    function pauseAllExcept(currentVideo) {
      videoContainers.forEach(otherContainer => {
        const otherVideo = otherContainer.querySelector("video");
        if (otherVideo !== currentVideo) {
          otherVideo.pause();
          otherContainer.classList.remove("playing");
          otherContainer.classList.add("paused");
        }
      });
    }

    function togglePlayPause() {
      if (video.paused) {
        pauseAllExcept(video); // <-- para todos os outros antes de tocar este
        video.play();
        container.classList.add("playing");
        container.classList.remove("paused");
      } else {
        video.pause();
        container.classList.remove("playing");
        container.classList.add("paused");
      }
    }

    video.addEventListener("click", togglePlayPause);
    playToggle.addEventListener("click", togglePlayPause);

    container.addEventListener("mouseenter", () => {
      if (video.paused) {
        container.classList.add("paused");
      }
    });

    container.addEventListener("mouseleave", () => {
      if (!container.classList.contains("playing")) {
        container.classList.remove("paused");
      }
    });

    // Iniciar com todos pausados
    video.pause();
    container.classList.add("paused");
  });
});

