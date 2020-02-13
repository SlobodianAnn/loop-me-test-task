
//-----------------SLIDER---------------

var slider = document.getElementById('slider');
var sliderItems = document.getElementsByClassName('wrap-watch-img')[0];
var prev = document.getElementsByClassName('prev')[0];
var next = document.getElementsByClassName('next')[0];
var colorButtons = document.getElementsByClassName('color-buttons-wrapper');
var watchesNames = document.getElementsByClassName('watch-name');
var gallaryPrices = document.getElementsByClassName('gallary-price');

function slide(wrapper, items, prev, next) {
    var posX1 = 0,
        posX2 = 0,
        posInitial,
        posFinal,
        threshold = 100,
        slides = items.getElementsByClassName('gallary-watches-img'),
        slidesLength = slides.length,
        slideSize = 330,
        firstSlide = slides[0],
        lastSlide = slides[slidesLength - 1],
        cloneFirst = firstSlide.cloneNode(true),
        cloneLast = lastSlide.cloneNode(true),
        index = 0,
        allowShift = true;
        count = 0;

    items.appendChild(cloneFirst);
    items.insertBefore(cloneLast, firstSlide);
    wrapper.classList.add('loaded');
    
    items.onmousedown = dragStart;
    
    items.addEventListener('touchstart', dragStart);
    items.addEventListener('touchend', dragEnd);
    items.addEventListener('touchmove', dragAction);
    
    prev.addEventListener('click', function () { shiftSlide(-1) });
    next.addEventListener('click', function () { shiftSlide(1) });
    
    items.addEventListener('transitionend', checkIndex);
    
    function dragStart (e) {
      e = e || window.event;
      e.preventDefault();
      posInitial = items.offsetLeft;
      
      
      if (e.type == 'touchstart') {
        posX1 = e.touches[0].clientX;
      } else {
        posX1 = e.clientX;
        document.onmouseup = dragEnd;
        document.onmousemove = dragAction;
      }
    }
  
    function dragAction (e) {
      e = e || window.event;
      
      if (e.type == 'touchmove') {
        posX2 = posX1 - e.touches[0].clientX;
        posX1 = e.touches[0].clientX;
      } else {
        posX2 = posX1 - e.clientX;
        posX1 = e.clientX;
      }
      items.style.left = (items.offsetLeft - posX2) + "px";
    }
    
    function dragEnd (e) {
      posFinal = items.offsetLeft;
      if (posFinal - posInitial < -threshold) {
        shiftSlide(1, 'drag');
      } else if (posFinal - posInitial > threshold) {
        shiftSlide(-1, 'drag');
      } else {
        items.style.left = (posInitial) + "px";
      }
  
      document.onmouseup = null;
      document.onmousemove = null;
    }
    
    function shiftSlide(dir, action) {
      items.classList.add('shifting');
      
      if (allowShift) {
        if (!action) { posInitial = items.offsetLeft; }
  
        if (dir == 1) {
          items.style.left = (posInitial - slideSize) + "px";
          colorButtons[count].classList.add('hide-gallary-element');
          watchesNames[count].classList.add('hide-gallary-element');
          gallaryPrices[count].classList.remove('gallary-price-show');
          count++;
          index++; 
          if(count >= 3){
            count = 0
          }
          gallaryPrices[count].classList.add('gallary-price-show');
          colorButtons[count].classList.remove('hide-gallary-element');
          watchesNames[count].classList.remove('hide-gallary-element');
        } else if (dir == -1) {
          items.style.left = (posInitial + slideSize) + "px";
          colorButtons[count].classList.add('hide-gallary-element');
          watchesNames[count].classList.add('hide-gallary-element');
          gallaryPrices[count].classList.remove('gallary-price-show');
          count--;
          index--; 
          if (count == -1){
            count = 2;
          }
          gallaryPrices[count].classList.add('gallary-price-show');
          watchesNames[count].classList.remove('hide-gallary-element');
          colorButtons[count].classList.remove('hide-gallary-element'); 
        }
      };
      
      allowShift = false;
    }
      
    function checkIndex (){
      items.classList.remove('shifting');
  
      if (index == -1) {
        items.style.left = -(slidesLength * slideSize) + "px";
        index = slidesLength - 1;
        count = slidesLength - 1;
      }
  
      if (index == slidesLength) {
        items.style.left = -(1 * slideSize) + "px";
        index = 0;
      }
      allowShift = true;
    }
  }
  slide(slider, sliderItems, prev, next);
