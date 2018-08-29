
'use strict';

function buildDom(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}

function main(){

  var splashMain;
  var gameOverMain;
  var game;

    //----Splash
  function buildSplash(){
    splashMain = buildDom(`
      <main>
        <body>
          <h1>Up or Down</h1>
          <button>Start</button>
        </body>
      </main>`
    );

    document.body.appendChild(splashMain);

    var button = splashMain.querySelector('button');
    button.addEventListener('click', startGame);
  
  };

  function destroySplash(){
    splashMain.remove();
  
  }
  
  //---- Game
  function startGame(){
    destroySplash();
    destroyGameOver();
    
    game = new Game();
    game.start();
  
    window.setTimeout(function(){
      gameOver();
    }, 3000);
  };

  //game over
  function destroyGame(){
    game.destroy();
  };

  //----Game Over
  function gameOver(){
    destroyGame();
    buildGameOver();  
  };

  function buildGameOver(){

    //TODO score
    var score = 99;

    gameOverMain =  buildDom(`
      <main>
        <p>Your score is: ` + score + `.</p>
        <button>Restart</button>
      </main>`
    );

    var button = gameOverMain.querySelector('button');
    button.addEventListener('click', startGame);

    document.body.appendChild(gameOverMain);

  };

  function destroyGameOver(){
    if (gameOverMain){
      gameOverMain.remove();
    }
  };
  
  //---Initialize
  buildSplash();
};


window.addEventListener('load', main);

