var request = new XMLHttpRequest();

request.open('GET','https://hplussport.com/api/products?qty=3&order=name');


request.onload = function()
{
    var response = request.response;
    console.log(response);
    console.log(typeof response)
    var jsonData = JSON.parse(response);
    console.log(jsonData);
    console.log(typeof jsonData); 
}

request.send();