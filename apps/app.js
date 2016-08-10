'use strict';
var prog_type;
var edu_type;

//LOGO DEFS
//ACM = 'Scholarship' and 'K12'
//ACI = 'Scholarship'
//AFE = 'Loans' and 'High School'
//
//Logos should appear in the form under the combination of those menu options

function horribleFunction(prog_type, edu_type) {
    if (prog_type == 'schol') {
        $('.aci_gray').removeClass("aci_gray").addClass("aci_color").css("display", "inline");
        $('.acm_color').removeClass("acm_color").addClass("acm_gray").css("display", "inline");
        $('.afe_color').removeClass("afe_color").addClass("afe_gray").css("display", "inline");
        if (edu_type == 'k12') {
            $('.acm_gray').removeClass("acm_gray").addClass("acm_color").css("display", "inline");
            $('.aci_color').removeClass("aci_color").addClass("aci_gray").css("display", "inline");
            $('.afe_color').removeClass("afe_color").addClass("afe_gray").css("display", "inline");
        } else if (edu_type == 'high') {
            $('.aci_color').removeClass("aci_color").addClass("aci_gray").css("display", "inline");
            $('.afe_color').removeClass("afe_color").addClass("afe_gray").css("display", "inline");
            $('.acm_color').removeClass("acm_color").addClass("acm_gray").css("display", "inline");
        }
    } else if (prog_type == 'loan') {
        $('.aci_color').removeClass("aci_color").addClass("aci_gray").css("display", "inline");
        $('.afe_color').removeClass("afe_color").addClass("afe_gray").css("display", "inline");
        $('.acm_color').removeClass("acm_color").addClass("acm_gray").css("display", "inline");
        if (edu_type == 'k12') {
            $('.aci_color').removeClass("aci_color").addClass("aci_gray").css("display", "inline");
            $('.afe_color').removeClass("afe_color").addClass("afe_gray").css("display", "inline");
            $('.acm_color').removeClass("acm_color").addClass("acm_gray").css("display", "inline");
        } else if (edu_type == 'high') {
            $('.aci_color').removeClass("aci_color").addClass("aci_gray").css("display", "inline");
            $('.afe_gray').removeClass("afe_gray").addClass("afe_color").css("display", "inline");
            $('.acm_color').removeClass("acm_color").addClass("acm_gray").css("display", "inline");
        }
    } else {
        $('.acm_gray').removeClass("acm_gray").addClass("acm_color").css("display", "inline");
        $('.aci_gray').removeClass("aci_gray").addClass("aci_color").css("display", "inline");
        $('.afe_gray').removeClass("afe_gray").addClass("afe_color").css("display", "inline");
    }
}

$(document).ready(function () {
    $('#search_form').submit(function (event) {
        event.preventDefault(event);
        prog_type = $('#program option:selected').val();
        edu_type = $('#education option:selected').val();
        horribleFunction(prog_type, edu_type);
    });
});
