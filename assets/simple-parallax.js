  const images = document.getElementsByClassName('parallax-image');
  new simpleParallax(images, {
    scale: 1.8,
    orientation: 'up',
    overflow: false,
    delay: 0.4,
    transition: 'cubic-bezier(0,0,0,1)',
  });