var Nightmare = require('nightmare');

describe(' Test Front-End Rendering', function() {

    this.timeout(30000);

    it('jQuery render should be complete', function(done) {
        var nightmare = Nightmare()
        nightmare
        .goto('https://jq-render.firebaseapp.com')
        .viewport(320,480)
        .wait('.mdl-card__supporting-text')
        .end()
        .then(function(link) {
          done()
      })
    })

    it('Angular 1 render should be complete', function(done) {
        var nightmare = Nightmare()
        nightmare
        .goto('https://ng1-render.firebaseapp.com')
        .viewport(320,480)
        .wait('.mdl-card__supporting-text')
        .end()
        .then(function(link) {
          done()
      })
    })

    it('Angular 2 render should be complete', function(done) {
        var nightmare = Nightmare()
        nightmare
        .goto('https://ng2-render.firebaseapp.com')
        .viewport(320,480)
        .wait('.mdl-card__supporting-text')
        .end()
        .then(function(link) {
          done()
      })
    })

    it('ReactJS render should be complete', function(done) {
        var nightmare = Nightmare()
        nightmare
        .goto('https://react-render.firebaseapp.com')
        .viewport(320,480)
        .wait('.mdl-card__supporting-text')
        .end()
        .then(function(link) {
          done()
      })
    })

    it('Polymer render should be complete', function(done) {
        var nightmare = Nightmare()
        nightmare
        .goto('https://polymer-render.firebaseapp.com')
        .viewport(320,480)
        .wait('.mdl-card__supporting-text')
        .end()
        .then(function(link) {
          done()
      })
    })

    it('RiotJs render should be complete', function(done) {
        var nightmare = Nightmare()
        nightmare
        .goto('https://riot-render.firebaseapp.com')
        .viewport(320,480)
        .wait('.mdl-card__supporting-text')
        .end()
        .then(function(link) {
          done()
      })
    })

    it('VueJS render should be complete', function(done) {
        var nightmare = Nightmare()
        nightmare
        .goto('https://vue-render.firebaseapp.com')
        .viewport(320,480)
        .wait('.mdl-card__supporting-text')
        .end()
        .then(function(link) {
          done()
      })
    })

    it('VueJS 2.0 render should be complete', function(done) {
        var nightmare = Nightmare()
        nightmare
        .goto('https://vue2-render.firebaseapp.com')
        .viewport(320,480)
        .wait('.mdl-card__supporting-text')
        .end()
        .then(function(link) {
          done()
      })
    })
})
