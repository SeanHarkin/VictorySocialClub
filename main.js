let currentHash = 999;
let currentTier = 999;

let tierCALC = Math.abs(currentTier % 3);

$(document).ready(function() {

    $(".launch").click(function() {
        $(".launch").css({
            "opacity": "0"
        });
        $(".mainSite").css({
            "opacity": "1"
        });
    });
    console.log(VSC);

    setText(currentHash, currentTier);
    function memberCALC(index) {
        let memberCALC = Math.abs(index % VSC["Victory Social Club"]["0"].members.length);
        i = memberCALC.toString();
        return i;

    }

    function placeCALC(index) {
        let placeCALC = Math.abs(index % VSC["Victory Social Club"]["0"].places.length);
        i = placeCALC.toString();
        return i;

    }

    function setText(index, tier) {
        tierCALC = Math.abs(tier % 3);

        console.log(tierCALC);
        $(".nav").text("");

        if (tierCALC == 0) {
            $("h1").text("Victory Social Club");
            $("h2").text("Collaborative Community");
            $("p").text("Victory Social Club is a multi-disciplinary production and design studio comprised of award-winning filmmakers, visual effects artists, 2D and 3D animators, compositors, designers, sound editors and picture editors.");
            $(".left").text("People");
            $(".right").text("Places");

        } else if (tierCALC == 1) {

            let name = VSC["Victory Social Club"]["0"].members[memberCALC(index)].h1;
            let title = VSC["Victory Social Club"]["0"].members[memberCALC(index)].h2;
            let bio = VSC["Victory Social Club"]["0"].members[memberCALC(index)].p;
            $("h1").text(name);
            $("h2").text(title);
            $("p").text(bio);
            $(".left").text(VSC["Victory Social Club"]["0"].members[memberCALC(index + 1)].h1);
            $(".right").text(VSC["Victory Social Club"]["0"].members[memberCALC(index - 1)].h1);
            $("body").css({
                "background-image": VSC["Victory Social Club"]["0"].members[memberCALC(index)].background.source
            });
            $("body").css({
                "background-image": VSC["Victory Social Club"]["0"].members[memberCALC(index)].background.source
            });
            $("p, h1, h2").css({
                "text-align": VSC["Victory Social Club"]["0"].members[memberCALC(index)]["text-align"]
            });
            $(".content").css({
                "left": VSC["Victory Social Club"]["0"].members[memberCALC(index)].left
            });
            $("#LOGO").css({
                "left": VSC["Victory Social Club"]["0"].members[memberCALC(index)].logo.left,
                "top": VSC["Victory Social Club"]["0"].members[memberCALC(index)].logo.top,
                "width": VSC["Victory Social Club"]["0"].members[memberCALC(index)].logo.width
            });
            $("#CREST").css({
                "transform": VSC["Victory Social Club"]["0"].members[memberCALC(index)].logo.rotate
            });
            $("p, h1, h2").css({
                "color": VSC["Victory Social Club"]["0"].members[memberCALC(index)]["text-color"]
            });

        } else if (tierCALC == 2) {

            let name = VSC["Victory Social Club"]["0"].places[placeCALC(index)].h1;
            let title = VSC["Victory Social Club"]["0"].places[placeCALC(index)].h2;
            let bio = VSC["Victory Social Club"]["0"].places[placeCALC(index)].p;
            $("h1").text(name);
            $("h2").text(title);
            $("p").html(bio);
            $(".left").text(VSC["Victory Social Club"]["0"].places[placeCALC(index + 1)].h1);
            $(".right").text(VSC["Victory Social Club"]["0"].places[placeCALC(index - 1)].h1);
        }

    }

    let frameOffset = 0.70;

    $(".nav").mousedown(function() {});

    $(".left").click(function() {

        if (tierCALC == 0) {
            currentTier++;
            setText(currentHash, currentTier);


        } else {
            currentHash++;
            setText(currentHash, currentTier);

        }
    });

    $(".right").click(function() {

        if (tierCALC == 0) {
            currentTier--;
            setText(currentHash, currentTier);

        } else {
            currentHash--;
            setText(currentHash, currentTier);

        }
    });

});
