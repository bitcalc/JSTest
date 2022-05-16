let hrefGlobal;

function badSink() {
  let href = hrefGlobal;
  let node = document.createElement('a');
  node.setAttribute('href', href);
}

function bad() {
  hrefGlobal = location.href;
  badSink();
}

bad();

function good() {
  hrefGlobal = "https://localhost"
  goodSink()
}

function goodSink() {
  let href = hrefGlobal
  let node = document.createElement('a');
  node.setAttribute('href', href);
}

good()
