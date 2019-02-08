
// 10 cells wide
// 24 cells high
let canvas = document.getElementById('canvas');
let pieces = [];

function getPieceParts(idx){
  return pieces[idx].getParts();
}

function newPiece(){
  const num = Math.floor(Math.random() * 7)+1;
  let first = new Piece(num);
  pieces.push(first);
}

function draw(event){
  console.log("So we draw it", pieces);
  let rotate = false;
  if(event){
    if(event.target.getAttribute('id') == 'rotateIt'){
      rotate = true;
    }
  }
console.log("rotate", rotate);
  if(pieces.length == 0){
    newPiece();
  }

  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    if(rotate){
      pieces[0].rotate();
    }
    const pieceParts = getPieceParts(0);

    const xa = 50;
    const ya = 50;
console.log("piece parts", pieceParts)
    for(let x = -5; x < 5; x++){
      for(let y = -5; y <5; y++){
        const found = pieceParts.reduce((prev, part) => {
          return part[0] == x && part[1] == y ? true : prev;
        }, false);
        // console.log("Found ?", x, y, found);


        if(found){
          ctx.fillStyle = "#000";
          ctx.fillRect(x*16+xa, y*16+ya, 14, 14);
        }else{
          ctx.fillStyle = "#FFF";
          ctx.fillRect(x*16+xa, y*16+ya, 14, 14);
        }
      }
    }
  }
}

document.getElementById("drawIt").addEventListener("click", draw);
document.getElementById("rotateIt").addEventListener("click", draw);

draw(false);
