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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjaGVja1dlYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBpc1dlYnAoKSB7XHJcblxyXG4gICAgZnVuY3Rpb24gdGVzdFdlYlAoY2FsbGJhY2spIHtcclxuICBcclxuICAgICAgICBsZXQgd2ViUCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHdlYlAub25sb2FkID0gd2ViUC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjYWxsYmFjayh3ZWJQLmhlaWdodCA9PSAyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYlAuc3JjID0gXCJkYXRhOmltYWdlL3dlYnA7YmFzZTY0LFVrbEdSam9BQUFCWFJVSlFWbEE0SUM0QUFBQ3lBZ0NkQVNvQ0FBSUFMbWswbWswaUlpSWlJZ0JvU3lnQUJjNldXZ0FBL3ZlZmYvMFBQOGJBLy9Md1lBQUFcIjtcclxuICAgIH1cclxuICAgICAgICBcclxuICAgIHRlc3RXZWJQKGZ1bmN0aW9uIChzdXBwb3J0KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHN1cHBvcnQgPT09IHRydWUpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd2VicCcpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCduby13ZWJwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIGlzV2VicCgpOyJdLCJmaWxlIjoiY2hlY2tXZWIuanMifQ==