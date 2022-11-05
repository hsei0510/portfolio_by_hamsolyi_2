$(function(){
  $(window).scroll(function(){
    var wHeight = $(this).height(); // window 창의 높이를 가져온다.
    var thisScrollTop = $(this).scrollTop(); // window 창의 scroll top 값을 가져온다.
    $('.slide').each(function(){
      // console.log($(this).offset().top);
      var thisOffset = $(this).offset();// offset.top : 브라우저 화면창의 상단에서부터 거리를 가져올 수 있다.
      // 실습 1:
      // slide구간을 각각 체크하고 하위 요소 중 h2의 텍스트를
      // 해당 영역에 스크롤이 도달하면 consol.log에 출력하시오.
      if( thisOffset.top - 200 <= thisScrollTop && thisScrollTop < thisOffset.top + wHeight ){
        console.log($(this).find('h2').text());
        var bodyBg = $(this).data('background');
        // var test = $(this).attr('data-background');
        // console.log('attr() :'+test);
        console.log(bodyBg);
        $('body').css('background-color',bodyBg);
        $('.slide').removeClass('active');
        // $(this).addClass('active');
        $(this).addClass('on');
      }
    });
    /*navigation fixed*/
    var navBar = $('nav');
    /*
    실습 :
    윈도우 스크롤 시 내비게이션 고정형으로 변경하는 코드를 아래 작성하시오.
    */
    if( thisScrollTop > wHeight - 70 ){
      navBar.addClass('fixed');
    }else{
      navBar.removeClass('fixed');
    }
  });
});
