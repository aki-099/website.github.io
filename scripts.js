// ページが読み込まれた後にスクリプトを実行
document.addEventListener('DOMContentLoaded', function() {
    // ボタン要素と情報エリアを取得
    const infoButton = document.getElementById('infoButton');
    const info = document.getElementById('info');
  
    // ボタンをクリックした時の処理
    infoButton.addEventListener('click', function() {
      // 情報エリアが非表示の場合、表示に切り替え
      if (info.style.display === 'none' || info.style.display === '') {
        info.style.display = 'block';
        infoButton.textContent = '閉じる';
      } else {
        // 情報エリアが表示されている場合、非表示に切り替え
        info.style.display = 'none';
        infoButton.textContent = 'もっと知る';
      }
    });
  });
  