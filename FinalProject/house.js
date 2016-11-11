$('#hide_1').click(function(){
    $('#demo_1').hide(2000);
});
$('#hide_2').click(function(){
    $('#demo_2').hide(2000);
});
$('#hide_3').click(function(){
    $('#demo_3').hide(2000);
});
$('#show_all').click(function(){
    $('#demo_1').show(2000);
    $('#demo_2').show(3000);
    $('#demo_3').show(4000);
});

function demo1(){
    $('#demo_1').toggle(2000);
};
function demo2(){
    $('#demo_2').toggle(2500);
};
function demo3(){
    $('#demo_3').toggle(3000);
};

$('#animation').click(function(){
    var cid1= setInterval("demo1()",900);
    var cid2= setInterval("demo2()",1100);
    var cid3= setInterval("demo3()",700);
    setTimeout(function(){clearInterval(cid1)},20000);
    setTimeout(function(){clearInterval(cid2)},20000);
    setTimeout(function(){clearInterval(cid3)},20000);
});