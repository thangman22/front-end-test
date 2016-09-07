var Nightmare = require('nightmare');

var nightmare = Nightmare()
nightmare
.goto('http://ng1-render.firebaseapp.com')
.viewport(320)
.wait('.mdl-card__title')
.end()

.then(function(link) {
  console.log("complete");
  done();
})
