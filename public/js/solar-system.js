$(window).load(function(){

  var section = $("section"),
      universe = $("#universe"),
      solarsys = $("#solar-system");

  var init = function() {
    section.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
      $(this).removeClass('hide-UI').addClass("set-distance").addClass("set-zoom");
      $(this).dequeue();
    });
  };

  $("#data a").click(function(e) {
    var ref = $(this).attr("class");
    solarsys.removeClass().addClass(ref);
    $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });


  init();

});