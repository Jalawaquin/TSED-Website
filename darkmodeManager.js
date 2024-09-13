/* FIGURE OUT HOW TO TURN INTO OOP CLASS FOR BETTER REUSABILITY*/
function changeBackground(background_filename, color){
    const background_container = document.getElementById("background-container").style;
    background_container.backgroundImage = 'url(' + background_filename + ')';
    document.body.style.backgroundColor = color;
}

function backgroundOnOpen(landscape_image, portrait_image, color){
    const landscape = window.matchMedia("(orientation:landscape)").matches;

    if(landscape){
        changeBackground(landscape_image, color);
    }
    else{
        changeBackground(portrait_image, color);
    }
}

function backgroundOnChange(landscape_image, portrait_image, color){
    window.matchMedia("(orientation: landscape)").addEventListener("change", e =>{
        const landscape = e.matches;

        if(landscape){
            changeBackground(landscape_image, color);
        }
        else{
            changeBackground(portrait_image, color);
        }
    })
}
/*----------------------------------------------------------------------*/


function changeFooterColor(color){
   document.querySelector('custom-footer').style = "color: "+ color;

}

function darkMode(){
    var date = new Date();
    var hour = date.getHours();

    var landscape_image;
    var portrait_image;
    var color;

    if(hour > 19 || hour < 6){

        landscape_image = "BACKGROUND_IMAGE/tsed_darkmode_landscape.gif";
        portrait_image = "BACKGROUND_IMAGE/tsed_darkmode_portrait.gif";
        color = "black";

        backgroundOnOpen(landscape_image, portrait_image, color);
        backgroundOnChange(landscape_image, portrait_image, color);   
        
        changeFooterColor("#fdfdfd");
    }
    else{
        landscape_image= "BACKGROUND_IMAGE/tsed_lightmode_landscape.gif";
        portrait_image = "BACKGROUND_IMAGE/tsed_lightmode_portrait.gif";
        color = "#fdfdfd";
    
        backgroundOnOpen(landscape_image, portrait_image, color);
        backgroundOnChange(landscape_image, portrait_image, color);  

        changeFooterColor("black");
    }
}

darkMode()


