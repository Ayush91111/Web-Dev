function invertedRightAlignedTriangle(rows) {
    for (let i = rows; i >= 1; i--) {
        console.log("*".repeat(i));
    }
}

invertedRightAlignedTriangle(5);