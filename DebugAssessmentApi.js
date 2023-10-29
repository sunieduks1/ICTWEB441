
//Dark Mode
DarkModeButton.addEventListener('click', function() {
  var element = document.body;
  element.classList.toggle("dark-mode");
});


//API fetch RSS XML
rssButton.addEventListener('click', function(){  
// Listen to signal click action from the html web page button id called rssButton
  const RSS_URL = `https://rss.art19.com/apology-line`;

// Access to RSS URL 
fetch(RSS_URL) 
// Get the data. Response is, in most API's cases, a promise.
.then(response => response.text())
// Convert the Promise reponse into a string
.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
// Parse the sting make XML Object  
.then(data => 
document.getElementById("demorss").innerHTML = "RSS DATA from URL: " +
data.getElementsByTagName("title")[1].childNodes[0].nodeValue)
// Pick up all items iterate specific field stack them up into list class
// Put in to container and update to DOM
document.getElementById("demorss").style.color = "red";

});


//API fetch JSON
const dataContainer = document.getElementById("demo");
ApiButton.addEventListener('click', function(){ 
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => {
const myObj = data.products[0].title;
dataContainer.innerHTML = `<p style="color:red;">Josn DATA:  ${myObj}</p>`;    
})
});