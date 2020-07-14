const log = m => console.log("hellloo:", m);

function hi() {
  log("a");
}

!(function x() {
  log("OK");
  var x = document.getElementsByTagName("BODY")[0];
  const c = { width: "100px", height: "100px", margin: "0 2px" };
  //   x.innerHTML = "adasdasdas";
  // x.innerHTML = "";

  [1, 2, 3].forEach(e => {
    const i = document.createElement("img");
    const led = document.createElement("i");
    led.innerHTML = "+";
    i.src = "1.jpg";
    i.style.width = c.height;
    i.style.height = c.width;
    i.style.margin = c.margin;
    x.appendChild(i);
  });
})();

function ajaxPost(e, t) {
  var o;
  return (
    XMLHttpRequest &&
      ((o = new XMLHttpRequest()).open("GET", e, !0),
      (o.onreadystatechange = function() {
        4 === o.readyState &&
          200 <= o.status &&
          o.status < 400 &&
          t &&
          (document.querySelectorAll(t)[0].innerHTML = o.responseText);
      }),
      o.send()),
    !1
  );
}

ajaxPost("https://www.cloudflare.com/cdn-cgi/trace", ".ip-data");
