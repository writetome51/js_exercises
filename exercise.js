
setContent();


function getCirclePerim(radius){

    return (2 * Math.PI * radius);
}


function getSquarePerim(length){
    return length * 4;

}

function getTrianglePerim(length){
    return length * 3;
}


function setContent(){
    var params = {radius:2, squareSideLength:8, triangleSideLength:7};

    document.getElementById('var-radius').innerHTML = params.radius;
    var circle = document.getElementById('circle-perim');
    circle.innerHTML = getCirclePerim(params.radius);

    document.getElementById('var-squareSideLength').innerHTML = params.squareSideLength;
    var square = document.getElementById('square-perim');
    square.innerHTML = getSquarePerim(params.squareSideLength);

    document.getElementById('var-triangleSideLength').innerHTML = params.triangleSideLength;
    var triangle = document.getElementById('triangle-perim');
    triangle.innerHTML = getTrianglePerim(params.triangleSideLength);

}


