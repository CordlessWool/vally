var _urlpath = $(location).attr('pathname').split('/').pop();

$('#navbar-items-list >  li').each(function(){
    var _this = $(this);
    var _str = _this.find('a').attr('href');
    _str !== _urlpath ? _this.removeClass('active') : _this.addClass('active');
});