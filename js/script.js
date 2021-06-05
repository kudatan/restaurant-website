
$(document).ready(function(){
// offer text animation
    $.fn.animate_Text = function() {
        var string = this.text();
        return this.each(function(){
        var $this = $(this);
        $this.html(string.replace(/./g, '<span class="new">$&</span>'));
        $this.find('span.new').each(function(b, a){
        setTimeout(function(){ $(a).addClass('div_opacity'); }, 50 * b);
      });
     });
    };
    $('#smooth-offer-text').show();
    $('#smooth-offer-text').animate_Text();
   

// anchor link smooth animation
    $(".nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 900);
    });
});

// validate email
function validate(form,email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[form].elements[email].value;
    if(reg.test(address) == false) {
       alert('Incorrect email');
       return false;
    }
}
// validate phone number
function validate_tel(form,tel) {
        var reg = /^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/;
        var address = document.forms[form].elements[tel].value;
        if(reg.test(address) == false) {
           alert('Incorrect tel');
           return false;
        }
    }

