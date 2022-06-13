function isWebp() {

    function testWebP(callback) {
  
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
        
    testWebP(function (support) {
        
        if (support === true) {
        document.documentElement.classList.add('webp');
        }else{
        document.documentElement.classList.add('no-webp');
        }
    });
  }
  
  isWebp();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjaGVja1dlYnAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaXNXZWJwKCkge1xyXG5cclxuICAgIGZ1bmN0aW9uIHRlc3RXZWJQKGNhbGxiYWNrKSB7XHJcbiAgXHJcbiAgICAgICAgbGV0IHdlYlAgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB3ZWJQLm9ubG9hZCA9IHdlYlAub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2sod2ViUC5oZWlnaHQgPT0gMik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJQLnNyYyA9IFwiZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCxVa2xHUmpvQUFBQlhSVUpRVmxBNElDNEFBQUN5QWdDZEFTb0NBQUlBTG1rMG1rMGlJaUlpSWdCb1N5Z0FCYzZXV2dBQS92ZWZmLzBQUDhiQS8vTHdZQUFBXCI7XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICB0ZXN0V2ViUChmdW5jdGlvbiAoc3VwcG9ydCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChzdXBwb3J0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dlYnAnKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbm8td2VicCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBpc1dlYnAoKTsiXSwiZmlsZSI6ImNoZWNrV2VicC5qcyJ9