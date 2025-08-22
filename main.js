// main.js
import { Map } from './map.js';
import { Tower } from './tower.js';
import { Enemy } from './enemy.js';
import { UI } from './ui.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gameMap = new Map();
const ui = new UI();
window.towers = []; // Make towers global for UI to push new towers
const enemies = [new Enemy(0, 100)];

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  gameMap.draw(ctx);
  enemies.forEach(e => { e.update(); e.draw(ctx); });
  window.towers.forEach(t => t.draw(ctx));
  requestAnimationFrame(gameLoop);
}
gameLoop();
