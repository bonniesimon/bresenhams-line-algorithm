type Point = {
  x: number;
  y: number;
};

let logs: string[] = [];

const drawPointsToScreen = (points: Point[]) => {
  for(let row=20; row>=0; row--){
    for(let col= 0; col<20; col++){
      const shouldDrawPoint = points.some(point => (point.x === row && point.y === col));
      // logs.push(`currentPoint: ${row}, ${col}     shouldDrowPoint: ${shouldDrawPoint}`);
      if (shouldDrawPoint){
        process.stdout.write(" @ ");
      } else {
        process.stdout.write(" * ");
      }
    }
    console.log("");
  }

  logs.forEach(log => console.log(log));
}

const bresenham = (p1: Point, p2: Point) => {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;

  let pk = 2 * dy - dx;
  let pointNew: Point = p1;

  let line: Point[] = [{...p1}];

  while(pointNew.x !== p2.x && pointNew.y !== p2.y){
    if(pk < 0){
      pk = pk + 2 * dy;
      pointNew.x = pointNew.x + 1;
      pointNew.y = pointNew.y;
    } else {
      pk = pk + 2*dy - 2*dx;
      pointNew.x = pointNew.x + 1;
      pointNew.y = pointNew.y + 1;
    }

    line.push({...pointNew})
  }

  return line;
}

const main = () => {
  const start: Point = {x: 1, y: 1};
  const end: Point = {x: 10, y: 10};

  const line: Point[] = bresenham(start, end);

  drawPointsToScreen(line);
};

main();
