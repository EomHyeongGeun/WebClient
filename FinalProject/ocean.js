function bigger(x) {
    x.style.height="25em";
    x.style.width="auto";
}
function normal(x) {
    x.style.height="19em";
    x.style.width="auto";
}
//$('.hello').click(function(){
//    $('.hello').css({left: 150px; top:80px;})
//});
$('.flip').click(function(){
    $('.panel').slideToggle(3000);
})
function black(){
    $('.change_color').css('color','black');
}
function red(){
    $('.change_color').css('color','red');
}
function yellow(){
    $('.change_color').css('color','yellow');
}
function green(){
    $('.change_color').css('color','green');
}
function addnaver1(){
    $('#naver_map').addClass('navermap1');
}
function removenaver1(){
    $('#naver_map').removeClass('navermap1');
}
function addnaver2(){
    $('#naver_map').addClass('navermap2');
}
function removenaver2(){
    $('#naver_map').removeClass('navermap2');
}