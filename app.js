

// just a console log for ourselves.

const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

function  fromDollarToYen (dollarToYen) {
    let yen = dollarToYen * 127.9
    return yen
}
function fromEuroToDollar (euroToDollar) {
    let euro =euroToDollar * 1.2
    return euro
}
function fromYenToPound(yenToPound) {
    let pound = yenToPound * 0.8
    return pound
}


// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum,fromEuroToDollar,fromDollarToYen, fromYenToPound};


