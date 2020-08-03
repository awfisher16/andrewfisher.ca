//Strucutral Engineering Collapse
$(document).ready(function() {
  var expanderTrigger = document.getElementById("js-expander-trigger-1");
  var expanderContent = document.getElementById("js-expander-content-1");

  $("#js-expander-trigger-1").click(function(){
    $(this).toggleClass("expander-hidden");
  });
});

//Project Management Collapse
$(document).ready(function() {
  var expanderTrigger = document.getElementById("js-expander-trigger-2");
  var expanderContent = document.getElementById("js-expander-content-2");

  $("#js-expander-trigger-2").click(function(){
    $(this).toggleClass("expander-hidden");
  });
});

//Technical Research Collapse
$(document).ready(function() {
  var expanderTrigger = document.getElementById("js-expander-trigger-3");
  var expanderContent = document.getElementById("js-expander-content-3");

  $("#js-expander-trigger-3").click(function(){
    $(this).toggleClass("expander-hidden");
  });
});

//Regulation & Public Policy Collapse
$(document).ready(function() {
  var expanderTrigger = document.getElementById("js-expander-trigger-4");
  var expanderContent = document.getElementById("js-expander-content-4");

  $("#js-expander-trigger-4").click(function(){
    $(this).toggleClass("expander-hidden");
  });
});

//Structural Engineering Modal
$(document).ready(function() {
  $("#modal-1").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
  });

  $(".modal-fade-screen, .modal-close").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });
});

//Bridge Rehabilitation Modal
$(document).ready(function() {
  $("#modal-2").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
  });

  $(".modal-fade-screen, .modal-close").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });
});

//Wind Engineering Modal
$(document).ready(function() {
  $("#modal-3").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
  });

  $(".modal-fade-screen, .modal-close").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });
});

//Land Development Modal
$(document).ready(function() {
  $("#modal-4").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
  });

  $(".modal-fade-screen, .modal-close").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });
});

//Concrete Inspection and Testing Modal
$(document).ready(function() {
  $("#modal-5").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
  });

  $(".modal-fade-screen, .modal-close").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });
});
