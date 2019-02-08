class Piece {
  constructor(type) {
    // this.height = height;
    // this.width = width;

    // X
    // Y
    // ROTATION ?
    // TYPE ?
    // this.parts = Array(16).fill(0);

    switch(type){
      case 1:
        //  Tall one
        this.parts = [
          [0, 1],
          [0, 2],
          [0, 3],
          [0, 4]
        ];
        break;

      case 2:
        // L1
        this.parts = [
          [1, 1],
          [1, 2],
          [1, 3],
          [0, 3]
        ];
        break;

      case 3:
        // L2
        this.parts = [
          [0, 1],
          [0, 2],
          [0, 3],
          [1, 3]
        ]
        break;

      case 4:
        // L2
        this.parts = [
          [0, 0],
          [0, 1],
          [1, 0],
          [1, 1]
        ]
        break;

      case 5:
        // L2
        this.parts = [
          [1, 0],
          [1, 1],
          [0, 1],
          [2, 1]
        ]
        break;

      case 6:
        // L2
        this.parts = [
          [1, 0],
          [1, 1],
          [0, 1],
          [2, 0]
        ]
        break;

      case 7:
        // L2
        this.parts = [
          [1, 0],
          [1, 1],
          [0, 0],
          [2, 1]
        ]
        break;
    }
  }

  // Move
  // Rotate
  show(){
    console.log("Piece parts", this.parts);
  }

  rotate(){
    /*
     xn = x * cos(angle) - y * sin(angle);
     yn = y * sin(angle) - x * cos(angle)
    */
    const angle = 90;
    const radians = (Math.PI / 180) * angle;
    const sin = Math.sin(radians);
    const cos = Math.cos(radians);

    const cx = 0, cy = 0;

    //const newX = x * Math.cos(angle) - y * Math.sin(angle);
    //const newY = y * Math.sin(angle) - x * Math.cos(angle);


    function rotate(cx, cy, x, y, angle) {
        var radians = (Math.PI / 180) * angle,
            cos = Math.cos(radians),
            sin = Math.sin(radians),
            nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
            ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
        return [nx, ny];
    }


    this.parts = this.parts.map(vect => {
      const x = vect[0];
      const y = vect[1];
      console.log("Before", x, y)

      const nx = (cos * (x - cx)) + (sin * (y - cy)) + cx;
      const ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;

      console.log("Before", nx, ny)
      return [Math.round(nx), Math.round(ny)];
    })
  }

  getParts(){
    return this.parts;
  }
}
