export class Map {
  constructor() {
    this.tileSize = 40;
    this.rows = 15;
    this.cols = 20;
  }

  draw(ctx) {
    ctx.fillStyle = '#88c070';
    ctx.fillRect(0, 0, this.cols * this.tileSize, this.rows * this.tileSize);
    ctx.fillStyle = '#a08050';
    ctx.fillRect(0, 100, this.cols * this.tileSize, this.tileSize);
  }
}
