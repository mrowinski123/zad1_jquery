/**
 * Created by mrowinski on 05.12.2016.
 */
var data=[];
function json_download() {

        $.getJSON('http://jsonplaceholder.typicode.com/posts', function (data) {
            var record = "";
            for (var i = 0; i < data.length; i++) {
                record+="<div class='row'>";
                record+="<div class='col-md-4'><b> Title:   </b>" + data[i].title+"</div>";
                record+="<div class='col-md-8'><b> Body:   </b>" + data[i].body + "</div>";
                $("#new").append("<li>"+record+"</li>");
                $("#new").append("<p> <button class='btn btn-info' type='button'>Lubię to</button></p><br></br>");
                $("#new").append("</div>");
                record="";
            }
        });
};

$(document).ready(function(){
    $("#button").click(function(){
        json_download();
    });
});