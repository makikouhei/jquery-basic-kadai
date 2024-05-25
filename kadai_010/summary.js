$(function () {
    // ボタンを押すと、文字色が変わる
    $('#change-color').on('click', function() {
      $('#target').css('color','red');
    });

     $('#change-text').on('click', function() {
        $('#target').text('Hello!');
      });

       // ボタンを押すと、フェードアウトで文字が消える
    $('#fade-out').on('click', function() {
        $('#target').fadeOut();
      });

       // ボタンを押すと、フェードインで文字が現れる
    $('#fade-in').on('click', function() {
        $('#target').fadeIn();
      });
  });