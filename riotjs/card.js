riot.tag2('card', '<div class="page-content" each="{Loaditems}"> <div class="card-wide mdl-card mdl-shadow--2dp"> <div class="mdl-card__title" riot-style="background: url({picture}) center / cover"> <h2 class="mdl-card__title-text"></h2> </div> <div class="mdl-card__supporting-text">{text}</div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Go to Article </a> </div> </div> </div>', 'card .card-wide.mdl-card,[riot-tag="card"] .card-wide.mdl-card,[data-is="card"] .card-wide.mdl-card{ width: 100%; } card .main-content,[riot-tag="card"] .main-content,[data-is="card"] .main-content{ padding: 10px; } card .card-wide > .mdl-card__title,[riot-tag="card"] .card-wide > .mdl-card__title,[data-is="card"] .card-wide > .mdl-card__title{ color: #fff; height: 176px; } card .page-content,[riot-tag="card"] .page-content,[data-is="card"] .page-content{ margin-bottom:10px; }', '', function(opts) {
    this.on('mount', function() {
      $.ajax({
        url: 'generated.json',
        type: 'GET',
        dataType: 'json',
      })
      .done((res) =>  {
        this.Loaditems = res;
        this.update();
      })
    })
});
