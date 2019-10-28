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
        $(".startMeUp").hide();

      });

      $(document).on("click", ".contact", function () {
        event.preventDefault();
        $(".hideMeNext").hide();
        $(".hitMeUp").show();
        $(".work").hide();
        $(".workPort").hide();
        $(".allAboutMe").hide();
        $(".startMeUp").hide();

      });
     
      $(document).on("click", ".about", function () {
        event.preventDefault();
        $(".hideMeNext").hide();
        $(".allAboutMe").show();
        $(".work").hide();
        $(".workPort").hide();
        $(".hitMeUp").hide();
        $(".startMeUp").hide();
    
      });
      
      function copyText() {
        /* Get the text field */
        var copyText = document.getElementById("emailMe");
      
        /* Select the text field */
        copyText.select();
      
        /* Copy the text inside the text field */
        document.execCommand("copy");
      
        /* Alert the copied text */
        alert("Copied the text: " + copyText.value);
      }
      
    });
