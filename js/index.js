// JavaScript Document

(function($) {
  var Index = $.index = (function() {

    var
      visualList = ["html", "head", "body", "div", "h1", "p", "a", "img", "span", "br", "commentout", "textarea", "section", "article", "aside", "canvas"];


    // コンストラクタ
    function init() {

      // ビジュアル切替
      changeVisual();

      // スムーススクロール
      var $scroller = $(document.scrollingElement || document.documentElement);
      $('a[href^=#]').on("click", function(event){
        event.preventDefault();

        var h = $(this).attr("href");
        var t = $(h === "#" || h === "" ? 'body' : h);

        // IE9以下は対応しない | http://caniuse.com/#search=pushState
        window.history.pushState(null, null, h);

        if( !t.offset() ) {
          return;
        }

        var p = t.offset().top - 60;
        var duration = Math.floor(Math.abs(p - $scroller.scrollTop()));

        // 既にスクロールしたい箇所にいるのであればアニメーションしない
        if(duration === 0) {
          return;
        }

        duration = duration > 1200 ? 1200 : duration;

        $scroller.stop().animate({
          scrollTop: p
        }, {
          easing: 'easeInOutExpo',
          duration: duration
        });

      });
      // アンカーリンクの点線枠消し
      $('a').focus(function(){this.blur();});

      // PrismJS の挙動を変える
      $('[class*="language-"]').each(function() {
        // line number をつける
        $(this).parent('pre').addClass('line-numbers')
      })
      Prism.highlightAll()
    }

    // ビジュアル操作
    function changeVisual() {
      $("#visual h1 img").each(function(index, el) {
        var visualSelect = visualList[Math.floor(Math.random() * visualList.length)];
        $(el).attr("src", $("#visual h1 img").attr("src").replace(".jpg", "_" + visualSelect + ".jpg"));
      });
    }

    // アクセス制御
    return {
    init : init
    }
  })();
  /* document.ready
  ----------------------------------------*/
  $(Index.init);
})(jQuery);
