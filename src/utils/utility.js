export function generateItems(numberOfItems) {
    return [...Array(numberOfItems).keys()].map(i => {
      const num = i + 1;
      return { label: `Item ${num}`, id: `value-${num}` };
    });
  }


  export function scrollToDiv(event){
    const target = window.document.getElementById(
      event.currentTarget.href.split("#")[1]
    );
    if (target) {
      var headerOffset = 80;
      var elementPosition = target.getBoundingClientRect().top;
      var offsetPosition = elementPosition - headerOffset;
      
      console.log("offsetPosition",elementPosition ,offsetPosition);
      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }


  export function isMobile() {
    // console.log("window.matchMedia: ", window.matchMedia);
    if (window.matchMedia("(max-width: 766px").matches) {
      /* The viewport is at least 991.98 pixels wide*/
      return true;
    } else if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      return true;
    } else if (window.screen && window.screen.width < 767) {
      return true
    } else {
      /* The viewport is less than 991.98 pixels wide*/
      return false;
    }
  }
  