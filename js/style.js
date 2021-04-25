var request = new XMLHttpRequest();

request.open('GET','https://hplussport.com/api/products?qty=3&order=name');


request.onload = function()
{
    var response = request.response;
    var jsonData = JSON.parse(response);
    console.log(jsonData);
     

    for(item in jsonData)
    {
        var name = jsonData[item].name;
        var image = jsonData[item].image;
        var products = document.createElement('li');
        var images = document.createElement('img');
        products.innerHTML = name;
        images.setAttribute('src',image); 
        
        document.body.appendChild(products);
        document.body.appendChild(images);
        
    }

}

request.send();