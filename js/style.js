var request = new XMLHttpRequest();

request.open('GET','https://hplussport.com/api/products?qty=3&order=name');


request.onload = function()
{
    var response = request.response;
    var jsonData = JSON.parse(response);
    console.log(jsonData);
    var descripcion = jsonData[0].description; 
    console.log(descripcion);

}

request.send();