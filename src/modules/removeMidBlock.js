export function removeChangingBlocks() {
      const landingPicture = document.getElementById('landingPicture')
            landingPicture.innerHTML = '';
            landingPicture.remove();
      const aboutSection = document.getElementById('aboutSection')
            aboutSection.innerHTML = '';
            aboutSection.remove();
      const showcaseReel = document.getElementById('showcaseReel')
            showcaseReel.innerHTML = '';
            showcaseReel.remove();
}