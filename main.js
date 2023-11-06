$(function(){
    $('.Coin').not(':animated').on('click',function(){
  
      /* ランダムで0か1を取得 */
      rndm = Math.floor( Math.random() * 2 );
  
      /* アニメーションを開始させる */
      $('.Coin').addClass('toss');
      /* 1.9秒後にアニメーションを停止し、コインの裏表を表示する */
      setTimeout(function(){
        $('.Coin').removeClass('toss');
        if(rndm == 1){
          $('.Coin').css(`background-image`,`url(CoinO.png)`);
          CoinO()
        } else {
          $('.Coin').css(`background-image`,`url(CoinU.png)`);
          CoinU()
        }
      },1800);
    });
  });
  