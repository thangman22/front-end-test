$(function() {
    $.ajax({
        url: 'generated.json',
        type: 'GET',
        dataType: 'json',
    })
    .done((res) =>  {
        res.forEach(ele => {
            $(".main-content").append('<div class="page-content"> <div class="card-wide mdl-card mdl-shadow--2dp"> <div class="mdl-card__title" style="  background: url(\''+ele.picture+'\') center / cover;"> <h2 class="mdl-card__title-text"></h2> </div> <div class="mdl-card__supporting-text"> ' + ele.text + ' </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"> Go to Article </a> </div> </div> </div>')
        })
    })
})
