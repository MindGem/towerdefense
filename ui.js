// ui.js
import { Tower } from './tower.js';

export class UI {
  constructor() {
    this.dragging = false;

    // Make a simple draggable tower icon in the right panel
    const panel = document.getElementById('uiPanel');
    const towerDiv = document.createElement('div');
    Object.assign(towerDiv.style, {
      width: '40px',
      height: '40px',
      background: 'blue',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '10px 0',
      cursor: 'grab',
      userSelect: 'none',
      borderRadius: '4px'
    });
    towerDiv.textContent = 'T';
    panel.appendChild(towerDiv);

    // Start drag (mouse + touch)
    const startDrag = (e) => { this.dragging = true; e.preventDefault(); };
    towerDiv.addEventListener('mousedown', startDrag);
    towerDiv.addEventListener('touchstart', startDrag, { passive: false });

    // Drop on canvas (mouse + touch)
    document.addEventListener('mouseup', (e) => this.tryPlace(e.clientX, e.clientY));
    document.addEventListener('touchend', (e) => {
      const t = e.changedTouches && e.changedTouches[0];
      if (t) this.tryPlace(t.clientX, t.clientY);
    });
  }

  tryPlace(clientX, clientY) {
    if (!this.dragging) return;
    const canvas = document.getElementById('gameCanvas');
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    // Only place if dropped inside canvas bounds
    if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
      // towers array is exposed from main.js as window.towers
      window.towers.push(new Tower(x, y));
    }
    this.dragging = false;
  }
}
