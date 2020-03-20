class Figure {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
}

class Rectangle extends Figure {
  constructor(x, y, w, h) {
    super(x, y);
    this.width = w;
    this.height = h;
  }

  area() {
    return this.width + this.height;
  }
}

let rect = new Rectangle(10, 10, 20, 25);
rect.move(5, 10);
console.log(rect);
