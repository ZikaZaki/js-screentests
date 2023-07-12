// Without Recursion
function polygonArea(n) {
  let area = 1;
  for (let i = 2; i <= n; i++){ area += (i-1) * 4; }

  return area;
}

// With Recursion
function polygonArea(n) {
    if (n === 1) {
    // 1-interesting polygon is a square with length 1
    return 1;
  } else {
    // Area of n-interesting polygon is (n-1)-interesting polygon's area plus n 1x1 squares added to its rim
    return polygonArea(n - 1) + (n - 1) * 4;
  }
}
