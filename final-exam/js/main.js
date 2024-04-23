// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');
// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {
    // console.log('click');
    // .hamburgerの表示・非表示を繰り返す
    hamburger.toggleClass('hamburger-menu-active');
});
// 画面幅のサイズが変わったら
$(window).on('resize', function () {
    // console.log('resize');
    // ハンバーガーメニューを閉じる
    hamburger.removeClass('hamburger-menu-active');
});


//カルーセル
$('.cover-slick').slick({
    //autoplay: true, // 自動再生
    autoplaySpeed: 5000, // 自動再生の速さ、単位はミリ秒
    arrows: false, // 左右のナビゲーションを無効
    // dots: true, // ドットを表示
    fade: true, // フェードで切り替え
    dots: true,//ドットの表示
});


// タブ
$('#smarttab').smartTab({
    enableUrlHash: false // タブidにもとづいたURLハッシュの付与を無効
});

//左側からフェードイン
$('.animate__left').waypoint({
    handler: function (direction) {
        // 要素が画面中央に来るとここが実行される
        if (direction === 'down') {
            /**
             * 下方向のスクロール
             * イベント発生元の要素に
             * fadeInLeftアニメーションを付けることで
             * アニメーションを開始
             */
            $(this.element)
                .addClass('animate__fadeInLeft');
        }
    },

    // 要素が画面中央に来たらhandlerを実行
    offset: '50%',
});

//右側からフェードイン
$('.animate__right').waypoint({
    handler: function (direction) {
        // 要素が画面中央に来るとここが実行される
        if (direction === 'down') {
            /**
             * 下方向のスクロール
             * イベント発生元の要素に
             * fadeInLeftアニメーションを付けることで
             * アニメーションを開始
             */
            $(this.element)
                .addClass('animate__fadeInRight');
        }
    },

    // 要素が画面中央に来たらhandlerを実行
    offset: '50%',
});