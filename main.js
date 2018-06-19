let currentPage = 999; //What page are we on? modulus functions make these adhere to proper range. Set away from 0, as behaviour is different around 0.
let currentTier = 999; //What level or tier in our site flow are we on?
let mainColor = "#e2be23"; //main site color
let bgOpacityHex = "0f"; //opacity values to be appended to colour values.
let textOpacityHex = "36";
let logoOpacityHex = "21";
let homeOpacityHex = "66";
let homeDarkHex = "#00000096";
let mainBgOpacityHex = "21";

let tierCALC = Math.abs(currentTier % 3); //modulus function to bring currentTier into bounds.

console.log(VSC);
//a reference of the VSC object for manipulating the DOM

// Preload Images
$.fn.preload = function() {
    this.each(function() {
        $('<img/>')[0].src = this;
    });
}
$(['alex.png', 'finlay.png', 'mike.png', 'zach.png', 'ryan.png', 'andres.png', 'sound.png', 'colour.png', 'edit.png', 'black.png']).preload();

//JQUERY loads after document ready. All JQUERY within this function.

$(document).ready(function() {

    //Initial launch. Clicking on logo activates main site. Using opacity instead of show/hide to allow for transition.

    $(".launch").click(function() {
        $(".launch").css({
            "opacity": "0"
        });
        $(".mainSite").css({
            "opacity": "1"
        });
        setPage(currentPage, currentTier);
    });

    //this function sets the page's content. See function below.
    setPage(currentPage, currentTier);

    //These functions generate an index calculation based on a modulus of the array length. In this case, for people and places.
    function memberCALC(pageIndex) {
        let memberCALC = Math.abs(pageIndex % VSC["Victory Social Club"][0].members.length);
        i = memberCALC;
        return i;

    }

    function placeCALC(pageIndex) {
        let placeCALC = Math.abs(pageIndex % VSC["Victory Social Club"][0].places.length);
        i = placeCALC;
        return i;

    }

    //this function sets the text and other elements of each page. For the main page, this is called in the script. For members and places, all info is called from the VSC object.
    function setPage(pageIndex, tier) {

        //a calculation so that tier is never out of bounds.
        tierCALC = Math.abs(tier % 3);

        //main page
        if (tierCALC == 0) {
            $("h1").text("Victory Social Club");
            $("h2").text("Collaborative Community");
            $("p").text("Victory Social Club is a multi-disciplinary production and design studio comprised of award-winning filmmakers, visual effects artists, 2D and 3D animators, compositors, designers, sound editors and picture editors.");
            $(".left").text("People");
            $(".right").text("Places");
            $("body").css({
                "background-image": "url(black.png)"
            });
            $("p, h1, h2").css({
                "text-align": "left"
            });
            $(".content").css({
                "left": "45%"
            });
            $("#LOGO").css({
                "width": "45%",
                "transform": "translate(-50%,-50%)",
                "left": "26%",
                "top": "50%"
            });
            $("#CREST").css({
                "transform": "rotate(0turn)"
            });

            // colors are HEX, allow an alpha HEX to be concatanated, mainBGOpacityHex, for example

            $("p, h1, h2").css({
                "color": mainColor
            });
            $(".nav, .content").css({
                "background-color": mainColor + mainBgOpacityHex
            });
            $(".nav").css({
                "color": mainColor
            });
            $("#CREST").css({
                "fill": mainColor
            });
            $(".cls-9").css({
                "fill": mainColor + homeOpacityHex
            });
            $(".cls-9").css({
                "fill": mainColor + homeOpacityHex
            });
            $(".cls-10").css({
                "fill": homeDarkHex
            });
            $(".cls-9").css({
                "stroke": homeDarkHex
            });

            //people page

        } else if (tierCALC == 1) {
            //for people and places, content and paramters are pulled from VSC object, automating the page buidling, and simplifying content revisions and additions.

            $("h1").text(VSC["Victory Social Club"][0].members[memberCALC(pageIndex)].h1);
            $("h2").text(VSC["Victory Social Club"][0].members[memberCALC(pageIndex)].h2);
            $("p").text(VSC["Victory Social Club"][0].members[memberCALC(pageIndex)].p);
            //left and right buttons are contextual using the CALC modulus functions.
            $(".left").text(VSC["Victory Social Club"][0].members[memberCALC(pageIndex + 1)].h1);
            $(".right").text(VSC["Victory Social Club"][0].members[memberCALC(pageIndex - 1)].h1);
            $("body").css({
                "background-image": VSC["Victory Social Club"][0].members[memberCALC(pageIndex)].background.source
            });
            $("p, h1, h2").css({
                "text-align": VSC["Victory Social Club"][0].members[memberCALC(pageIndex)]["text-align"]
            });
            $(".content").css({
                "left": VSC["Victory Social Club"][0].members[memberCALC(pageIndex)].left
            });
            $("#LOGO").css({
                "width": VSC["Victory Social Club"][0].members[memberCALC(pageIndex)].logo.width,
                "transform": "translate(-50%,-50%)",
                "left": VSC["Victory Social Club"][0].members[memberCALC(pageIndex)].logo.left,
                "top": VSC["Victory Social Club"][0].members[memberCALC(pageIndex)].logo.top
            });
            $("#CREST").css({
                "transform": VSC["Victory Social Club"][0].members[memberCALC(pageIndex)].logo.rotate
            });
            $("p, h1, h2").css({
                "color": VSC["Victory Social Club"][0].members[memberCALC(pageIndex)]["color"]
            });
            $(".nav, .content").css({
                "background-color": VSC["Victory Social Club"][0].members[memberCALC(pageIndex)]["color"].toString() + bgOpacityHex
            });
            $(".nav").css({
                "color": VSC["Victory Social Club"][0].members[memberCALC(pageIndex)]["color"].toString() + textOpacityHex
            });
            $("#CREST").css({
                "fill": VSC["Victory Social Club"][0].members[memberCALC(pageIndex)]["color"].toString() + logoOpacityHex
            });
            $(".cls-9").css({
                "fill": VSC["Victory Social Club"][0].members[memberCALC(pageIndex)]["color"].toString() + homeOpacityHex
            });
            $(".cls-9").css({
                "fill": VSC["Victory Social Club"][0].members[memberCALC(pageIndex)]["color"].toString() + homeOpacityHex
            });
            $(".cls-10").css({
                "fill": homeDarkHex
            });
            $(".cls-9").css({
                "stroke": homeDarkHex
            });

        } else if (tierCALC == 2) {

            //rinse & repeate for places. 
            $("h1").text(VSC["Victory Social Club"][0].places[placeCALC(pageIndex)].h1);
            $("h2").text(VSC["Victory Social Club"][0].places[placeCALC(pageIndex)].h2);
            $("p").html(VSC["Victory Social Club"][0].places[placeCALC(pageIndex)].p);
            $(".left").text(VSC["Victory Social Club"][0].places[placeCALC(pageIndex + 1)].h1);
            $(".right").text(VSC["Victory Social Club"][0].places[placeCALC(pageIndex - 1)].h1);
            $("body").css({
                "background-image": VSC["Victory Social Club"][0].places[placeCALC(pageIndex)].background.source
            });
            $("p, h1, h2").css({
                "text-align": VSC["Victory Social Club"][0].places[placeCALC(pageIndex)]["text-align"]
            });
            $(".content").css({
                "left": VSC["Victory Social Club"][0].places[placeCALC(pageIndex)].left
            });
            $("#LOGO").css({
                "width": VSC["Victory Social Club"][0].places[placeCALC(pageIndex)].logo.width,
                "transform": "translate(-50%,-50%)",
                "left": VSC["Victory Social Club"][0].places[placeCALC(pageIndex)].logo.left,
                "top": VSC["Victory Social Club"][0].places[placeCALC(pageIndex)].logo.top
            });
            $("#CREST").css({
                "transform": VSC["Victory Social Club"][0].places[placeCALC(pageIndex)].logo.rotate
            });
            $("p, h1, h2").css({
                "color": VSC["Victory Social Club"][0].places[placeCALC(pageIndex)]["color"]
            });
            $(".nav, .content").css({
                "background-color": VSC["Victory Social Club"][0].places[placeCALC(pageIndex)]["color"].toString() + bgOpacityHex
            });
            $(".nav").css({
                "color": VSC["Victory Social Club"][0].places[placeCALC(pageIndex)]["color"].toString() + textOpacityHex
            });
            $("#CREST").css({
                "fill": VSC["Victory Social Club"][0].places[placeCALC(pageIndex)]["color"].toString() + logoOpacityHex
            });
            $(".cls-9").css({
                "fill": VSC["Victory Social Club"][0].places[placeCALC(pageIndex)]["color"].toString() + homeOpacityHex
            });
            $(".cls-9").css({
                "fill": VSC["Victory Social Club"][0].places[placeCALC(pageIndex)]["color"].toString() + homeOpacityHex
            });
            $(".cls-10").css({
                "fill": homeDarkHex
            });
            $(".cls-9").css({
                "stroke": homeDarkHex
            });
        }

    }

//buttons. Tier dependent behaviour. With every button push, setPage is called.
    $(".left").click(function() {

        if (tierCALC == 0) {
            currentTier++;
            setPage(currentPage, currentTier);

        } else {
            currentPage++;
            setPage(currentPage, currentTier);

        }
    });

    $(".right").click(function() {

        if (tierCALC == 0) {
            currentTier--;
            setPage(currentPage, currentTier);

        } else {
            currentPage--;
            setPage(currentPage, currentTier);

        }
    });

    //home button

    $(".homeButton").click(function() {

        currentTier = 999;
        setPage(currentPage, currentTier);

    });

});
