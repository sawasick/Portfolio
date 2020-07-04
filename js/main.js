var topBtn = $('.topTitle');
var hamSw = false;
function fade(callback) {
    $('.js-modal').fadeOut();
    setTimeout(function() {
      callback();
    },500)
}
function unSlick() {
    $('.modal_imgSlide').slick('unslick');
}

//-----トップタイトルの表示-----
$(function() {
    var vh = window.innerHeight;
    var scrollMax = vh / 10 * 5;

    //リロード時の処理
    var opa = ($(this).scrollTop() - vh / 10 * 2) / scrollMax;
    if(opa < 0){
        opa = 0;
        topBtn.css('opacity', opa);
    }
    else if (0 <= opa && opa <= 1) {
        topBtn.css('opacity', opa);
    }
    else {
        opa = 1;
        topBtn.css('opacity', opa);
    }

    $(window).scroll(function () {
        opa = ($(this).scrollTop() - vh / 10 * 2) / scrollMax;
        if(opa < 0){
            opa = 0;
            topBtn.css('opacity', opa);
        }
        else if (0 <= opa && opa <= 1) {
            topBtn.css('opacity', opa);
        }
        else {
            opa = 1;
            topBtn.css('opacity', opa);
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
//-----トップタイトルのホバーアニメーション-----
$(function(){
    var opa;
    topBtn.hover(function(){
        opa = topBtn.css('opacity');
        if(.4 <= opa){
            topBtn.css('opacity', .4);
        }
        else{
        }
    }, function(){
        if($(window).scrollTop() === 0){//トップに遷移してきた場合
            topBtn.css('opacity',0);
        }
        else{
            topBtn.css('opacity', opa);
        }
    });
});

//-----トップへスクロール-----
$(function() {
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

// ------モーダル開閉,画像スライド-----
  $(function(){
    var slickSwitch = false;
    var opa;
    var par, graPar, graParOpa;
    $('.modalOpenBtn').each(function(){
        $(this).on('click',function(){
        var target = $(this).data('target');
        $('body').css('overflow', 'hidden');

        // slick
        var modal = document.getElementById(target);
        if(window.innerWidth <= 959){//スマホ,タブレット表示
            $('.modal_imgSlide').slick({
                dots:true,
                variableWidth:true,
                waitForAnimate: false,
                arrows: false
            });
        }
        else{//PC表示
            $('.modal_imgSlide').slick({
                dots:true,
                variableWidth:true,
                waitForAnimate: false,
                prevArrow:"<img src='image/modal/l.png' class='slide-arrow prev-arrow'>",
                nextArrow:"<img src='image/modal/r.png' class='slide-arrow next-arrow'>"
            });
        }

        //フィルタ適応中に選んだモーダルが範囲外だった場合の処理
        par =  $(this).parent();
        graPar = par.parent();
        graParOpa = graPar.css('opacity');
        if(graParOpa !== 1){
            graPar.css('opacity', 1);
        }
        //ハンバーガーメニュー非表示
        $('.hamburgerOpen').css('display', 'none');
        //モーダル開く
        $(modal).fadeIn();

        //モーダルウィンドウのスクロール位置をトップに
        $('.modal_content').each(function(){
            $(this).scrollTop(0);
        });
        return false;
    });

    });

    $('.modalCloseBtn').on('click',function(){
        //ハンバーガーメニュー表示
        $('.hamburgerOpen').css('display', 'block');
        //モーダル閉じる
        graPar.css('opacity', graParOpa);
        $(fade(unSlick));
        $('body').css('overflow', 'auto');
        return false;
    });
});

//Worksのカテゴリフィルタ
//初期状態はallが選択されている
$(function(){
    $('.catBtn').each(function(){
        if($(this).hasClass('all')){

        }
        else{
            $(this).css('opacity',.3);
        }
    });
});
//選択したカテゴリを表示
$('.catBtn').on('click', function(){
    var i = $(this).attr('id');
    $(function(){
        $('.catBtn').each(function(){
            if($(this).hasClass(i)){
                $(this).animate({opacity: 1}, {duration: 300, easing:'swing'});
            }
            else{
                $(this).animate({opacity: .3}, {duration: 300, easing:'swing'});
            }
        });

        $('.Works_work_block_list_li').each(function(){
            if(i === 'all'){//allなら全て表示
                $(this).animate({opacity: 1}, {duration: 300, easing:'swing'})
            }
            if(i !== 'all' && !$(this).hasClass(i)){//allではない&&選択したカテゴリではない
                $(this).animate({opacity: .2}, {duration: 300, easing:'swing'})
            }
            else{//それ以外(選択したカテゴリに含まれる)
                $(this).animate({opacity: 1}, {duration: 300, easing:'swing'})
            }
        });
    });
    return false;
});

//ハンバーガーメニューオープン
$('.hamburgerOpen').on('click', function(){
    if(hamSw === false){
        if(window.innerWidth <= 480){//スマホ表示
            $('.hamburgerOpen').animate({
                height: '100vh', width: '80vw', marginRight: '10%'
            }, {duration: 600});
        }
        else{//タブレット,PC表示
            $('.hamburgerOpen').animate({
                height: '100vh', width: '20vw', marginRight: '10%'
            }, {duration: 600});
        }

        $('.hamburger_line-top').animate({
            'width': '100%', 'top': '20%'
        }, {duration: 600, easing: 'swing'});

        $('.hamburger_line-middle').animate({
            'width': '100%', 'top': '40%'
        }, {duration: 600, easing: 'swing'});

        $('.hamburger_line-bottom').animate({
            'width': '100%', 'top': '60%'
        }, {duration: 600, easing: 'swing'});

        $('.hamburger_bg-left').animate({
            'left': '0'
        }, {duration: 600, easing: 'swing'});

        $('.hamburger_bg-right').animate({
            'right': '0'
        }, {duration: 600, easing: 'swing'});

        $('.hamburgerCloseBtn').css({
            'display': 'inline'
        })
        .animate({
            'opacity': '1'
        }, {duration: 600});

        setTimeout(function(){
            $('.hamburger_list').css({
                'display': 'block'
            })
            .animate({
                'opacity': '1'
            }, {duration: 800});
        },400);

        $('body').css('overflow', 'hidden');

        hamSw = true;
    }
});

//ハンバーガーメニュークローズ
$('.hamburgerClose').on('click', function(){
    $('.hamburgerOpen').animate({
        height: '44px', width: '50px', marginRight: '5%'
    }, {duration: 600});

    $('.hamburger_line-top').animate({
        'width': '100%', 'top': '0'
    }, {duration: 600, easing: 'swing'});

    $('.hamburger_line-middle').animate({
        'width': '80%', 'top': '40%'
    }, {duration: 600, easing: 'swing'});

    $('.hamburger_line-bottom').animate({
        'width': '60%', 'top': '80%'
    }, {duration: 600, easing: 'swing'});

    $('.hamburger_bg-left').animate({
        'left': '-70vw'
    }, {duration: 600, easing: 'swing'});

    if(window.innerWidth <= 480){//スマホ表示
        $('.hamburger_bg-right').animate({
            'right': '-100vw'
        }, {duration: 600, easing: 'swing'});
    }
    else{//タブレット,PC表示
        $('.hamburger_bg-right').animate({
            'right': '-30vw'
        }, {duration: 600, easing: 'swing'});
    }

    $('.hamburgerCloseBtn').css({
        'display': 'none'
    })
    .animate({
        'opacity': '0'
    }, {duration: 600});

    $('.hamburger_list').animate({
        'opacity': '0'
    }, {duration: 300});

    setTimeout(function(){
        $('.hamburger_list').css('display','none');
    },300);

    $('body').css('overflow', 'auto');

    hamSw = false;
});

//タイトルアニメーション終わったらカバー非表示
$(function(){
    $(".TopCover").on('webkitAnimationEnd', function(){
        $(this).css('display', 'none');
    });
    $(".title_block-Cover-LtoR").on('webkitAnimationEnd', function(){
        $(this).css('display', 'none');
    });
    $(".title_block-Cover-RtoL").on('webkitAnimationEnd', function(){
        $(this).css('display', 'none');
    });
});

//セクションタイトルのアニメーション
$(window).scroll(function (){
    var windowHeight = $(window).height();
    var thisPos;

    $('.title_block-Cover-LtoR').each(function(){
        thisPos = $(this).offset().top;
        var scroll = $(window).scrollTop();

        if (scroll >  thisPos - windowHeight + windowHeight / 2){
                $(this).addClass('fadeInLtoR');
        }
        else{
        }
    });
    $('.title_block-Cover-RtoL').each(function(){
        thisPos = $(this).offset().top;
        var scroll = $(window).scrollTop();

        if (scroll >  thisPos - windowHeight + windowHeight / 2){
                $(this).addClass('fadeInRtoL');
        }
        else{
        }
    });
    $('.title_name').each(function(){
        thisPos = $(this).offset().top;
        var scroll = $(window).scrollTop();

        if (scroll >  thisPos - windowHeight + windowHeight / 3){
                $(this).addClass('fadeInTitleText');
        }
        else{
        }
    });
    $('.title_underline').each(function(){
        thisPos = $(this).offset().top;
        var scroll = $(window).scrollTop();

        if (scroll >  thisPos - windowHeight + windowHeight / 4){
                $(this).addClass('fadeInTitleText');
        }
        else{
        }
    });
});
