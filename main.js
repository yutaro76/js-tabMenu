'use sttict';

{
  const menuItems = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');

  menuItems.forEach(function (item) {
    // a要素を一つ取得
    item.addEventListener('click', function (e) {
      e.preventDefault();

      // a要素を一つずつ取得して全てのactiveを外す
      menuItems.forEach(function (item) {
        item.classList.remove('active');
      });

      // 上で選んだa要素にactiveをつける
      // 一つ選ぶ　全て取り除く　一つつける
      item.classList.add('active');

      // すべてのcontentからactiveを外す
      contents.forEach(function (content) {
        content.classList.remove('active');
      });

      // クリックしたものに紐づくcontentにactiveクラスをつける
      document.getElementById(item.dataset.id).classList.add('active');
    });
  });
}
