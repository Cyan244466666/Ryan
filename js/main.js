/*
 * Used on all site pages
 * @author: Ryan Bolson
 * Created On:
 */

const cat_image_gif = "images/cat_animation/cat_animation.gif";


function play_cat_animation()
{
    document.getElementById("cat").src = cat_image_gif;
}

function hide()
{
    var div = document.getElementById("cat");
    div.style.display="none";
    var div = document.getElementById("cat_2");
    div.style.display="block";
}


function show()
{
    var div = document.getElementById("cat");
    div.style.display="block";
    var div = document.getElementById("cat_2");
    div.style.display="none";
}
