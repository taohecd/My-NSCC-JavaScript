// ENTER YOUR JAVASCRIPT CODE HERE
function showCustomer(str)
{
  var xmlhttp;    
  if (str=="")
  {
    document.getElementById("results").innerHTML="";
    return;
  }
  
    xmlhttp=new XMLHttpRequest();
  
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById("results").innerHTML=xmlhttp.responseText;
    }
  }
  xmlhttp.open("GET","https://jsonplaceholder.typicode.com/posts.php?q="+str,true);
  xmlhttp.send();
}