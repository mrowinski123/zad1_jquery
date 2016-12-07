/**
 * Created by mrowinski on 05.12.2016.
 */
var data=[];
$.getJSON('http://jsonplaceholder.typicode.com/posts',function(data){
    for(var i=0;i<data.length;i++)
    {
        $("#new").append("<li> Title: "+data[i].title+"</li>");
        $("#new").append("<li> Body: "+data[i].body+"</li><br></br>");
    }
});
