$(document).ready(function(){
    $(".line1").mouseenter(function(){
        $(".line1").css("background-color", "yellow");
    });
    $(".line1").mouseleave(function(){
        $(".line1").css("background-color", "white");
    });
});
$(document).ready(function(){
    $(".line2").mouseenter(function(){
        $(".line2").css("background-color", "yellow");
    });
    $(".line2").mouseleave(function(){
        $(".line2").css("background-color", "white");
    });
});
$(document).ready(function(){
    $(".line3").mouseenter(function(){
        $(".line3").css("background-color", "yellow");
    });
    $(".line3").mouseleave(function(){
        $(".line3").css("background-color", "white");
    });
});
$(document).ready(function(){
    $(".line4").mouseenter(function(){
        $(".line4").css("background-color", "yellow");
    });
    $(".line4").mouseleave(function(){
        $(".line4").css("background-color", "white");
    });
});
$(document).ready(function(){
    $(".line5").mouseenter(function(){
        $(".line5").css("background-color", "yellow");
    });
    $(".line5").mouseleave(function(){
        $(".line5").css("background-color", "white");
    });
});
$(document).ready(function(){
    $(".line6").mouseenter(function(){
        $(".line6").css("background-color", "yellow");
    });
    $(".line6").mouseleave(function(){
        $(".line6").css("background-color", "white");
    });
});
$(document).ready(function(){
    $(".line7").mouseenter(function(){
        $(".line7").css("background-color", "yellow");
    });
    $(".line7").mouseleave(function(){
        $(".line7").css("background-color", "white");
    });
});
$(document).ready(function(){
    $(".line8").mouseenter(function(){
        $(".line8").css("background-color", "yellow");
    });
    $(".line8").mouseleave(function(){
        $(".line8").css("background-color", "white");
    });
});
function bigger(x){             //  onmouseenter
    x.style.height="25em";
    x.style.width="auto";
}
function normal(x){             //  onmouseleave
    x.style.height="19em";
    x.style.width="auto";
}
$('.flip').click(function(){
    $('.panel').slideToggle(3000);
})
function addnaver1(){                           //  onclick
    $('#naver_map').addClass('navermap1');
}
function removenaver1(){                        //  ondblclick
    $('#naver_map').removeClass('navermap1');
}
function addnaver2(){
    $('#naver_map').addClass('navermap2');
}
function removenaver2(){
    $('#naver_map').removeClass('navermap2');
}
function addnaver3(){
    $('#naver_map').addClass('navermap3');
}
function removenaver3(){
    $('#naver_map').removeClass('navermap3');
}