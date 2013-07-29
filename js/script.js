jQuery(function($) {

  /*----- Contact form -------

  function deselect() {
    $(".pop").slideFadeToggle(function() {
      $("#contact").removeClass("selected");
    });
  }

  $(function() {
    $("#contact").on('click', function() {
      if($(this).hasClass("selected")) {
        deselect();
      } else {
        $(this).addClass("selected");
        $(".pop").slideFadeToggle(function() {
        $("#sender-name").focus();
      });
    }
    return false;
  });

  $(".contact-close").on('click', function() {
    deselect();
    return false;
    });
  });

  $.fn.slideFadeToggle = function(easing, callback) {
    return this.animate({ opacity: 'toggle', height: 'toggle' }, "fast", easing, callback);
  };

  //----- End of Contact Form -----*/

  $('.project-hash-tags a').tooltip();  // Initilize Bootstrap tooltips

  $('a[data-toggle="tab"]').on('shown', function (e) {  // Set up links in the footer according to active tab
    var targetTab = e.target.text;
    if (targetTab == "Projects") {
      $('#footer-about').replaceWith('<a id="footer-about"><li class="footer-link">About Me</li></a>');
      $('#footer-projects').replaceWith('<li id="footer-projects" class="footer-link footer-active-link">Projects</li>');
    } else {
      $('#footer-projects').replaceWith('<a id="footer-projects"><li class="footer-link">Projects</li></a>');
      $('#footer-about').replaceWith('<li id="footer-about" class="footer-link footer-active-link">About Me</li>');
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
