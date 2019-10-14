$(document).ready(function () {

    $(document).on("click", ".hideMeNext", function () {
        event.preventDefault();
        $(".hideMe").show();
        $(".hideMeNext").hide();

      });
      $(document).on("click", ".portal", function () {
        event.preventDefault();
        $(".work").show();
        $(".hideMeNext").hide();
        $(".hideMe").hide();

      });

    });
