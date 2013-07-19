jQuery(function($) {

  $('.project-hash-tags a').tooltip();

  $('a[data-toggle="tab"]').on('shown', function (e) {  // Set up links in the footer according to active tab
    var targetTab = e.target.text;
    if (targetTab == "Projects") {
      $('#footer-about').replaceWith('<a id="footer-about"><li class="footer-link">About Me</li></a>');
      $('#footer-projects').replaceWith('<li id="footer-projects" class="footer-link">Projects</li>');
    } else {
      $('#footer-projects').replaceWith('<a id="footer-projects"><li class="footer-link">Projects</li></a>');
      $('#footer-about').replaceWith('<li id="footer-about" class="footer-link">About Me</li>');
    }
  });

  // Footer link actions

  $('.footer-list').on('click', '#footer-projects', (function() {
    $('#tabs-list a[href="#projects"]').tab('show');
  }));

  $('.footer-list').on('click', '#footer-about', (function() {
    $('#tabs-list a[href="#about-me"]').tab('show');
  }));

});
