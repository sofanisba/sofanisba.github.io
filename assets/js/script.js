$(function() {
  var nav = $('#nav-column'),
      $mainContent = $('#main');

  function requestContent(file) {
    $mainContent
      .find('.content')
      .fadeOut(200, function(){
        $mainContent
          .load(file + ' .content')
      });
  }

  nav.click(function(e) {
    if (e.target != e.currentTarget) {
      e.preventDefault();
      var container = e.target.id
      url = container + ".html";
      history.pushState(container, null, url);
      requestContent(url)
    }
    e.stopPropagation();
  });

  $(window).bind("popstate", function(e) {
      var path = location.pathname.replace(/^.*[\\/]/, "");
      requestContent(path);
  });
});
