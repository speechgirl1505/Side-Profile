$(document).ready(function () {

    $(document).on("click", ".hideMeNext", function () {
        event.preventDefault();
        $(".allAboutMe").show();
        $(".hideMeNext").hide();
        $(".workPort").hide();

      });

      $(document).on("click", ".portal", function () {
        event.preventDefault();
        $(".hideMeNext").hide();
        $(".work").show();
        $(".workPort").show();
        $(".allAboutMe").hide();
        $(".hitMeUp").hide();

      });

      $(document).on("click", ".contact", function () {
        event.preventDefault();
        $(".hideMeNext").hide();
        $(".hitMeUp").show();
        $(".work").hide();
        $(".workPort").hide();
        $(".allAboutMe").hide();

      });
     
      $(document).on("click", ".about", function () {
        event.preventDefault();
        $(".hideMeNext").hide();
        $(".allAboutMe").show();
        $(".work").hide();
        $(".workPort").hide();
        $(".hitMeUp").hide();
    
      });

      // $(document).on("click", ".", function () {
      //   event.preventDefault();
      //   $(".allAboutMe").hide();
      //   $(".hideMeNext").hide();
      //   $(".hitMeUp").hide();
    
      // });

    });
