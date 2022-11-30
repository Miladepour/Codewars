function arrayMadness(a, b) {
    let sumA = a.map(num => num ** 2);
    let sumB = b.map(num => num ** 3);
  
    sumA = sumA.reduce((x, y) => x + y, 0);
    sumB = sumB.reduce((x, y) => x + y, 0);
  
    return sumA > sumB ? true : false;
  }