'use strict';

function Game(){
}
 
Game.prototype.start = function(){
  this.gameMain = buildDom(`
    <main>
      <p>this is a new game</p>
    </main>`
  );
  document.body.appendChild(this.gameMain);

};

Game.prototype.destroy = function(){
  this.gameMain.remove();
};
