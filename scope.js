function foo() {
  var bar = true;
  quux = true;
  return function zip() {
    var quux = false;
  };
}
