let currentHash = 999;
let currentTier = 999;

let VSC = 5;

$(document).ready(function() {

    $(".launch").click(function() {
        $(".launch").css({"opacity": "0"});
        $(".mainSite").css({"opacity":"1"});
    });

    // Your code here.

    //VSC = JSON.parse('{"Victory Social Club":{"members":[{"name":"Taco Jesus","Title":"TestBoi","Bio":"Candy"},{"name":"Finlay Braithwaite","Title":"Master of Design","Bio":"A juicer of a handy dude"},{"name":"Alex Kurina","Title":"Great Person","Bio":"What else can be said?"},{"name":"Tony! Toni! Tone!","Title":"Three Tonys!","Bio":"What!!!!!"}]}}');
    VSC = JSON.parse('{"Victory Social Club":[{"places":[{"h1":"colour","h2":"Grading Room","p":"This is a <b>fun</b> room"},{"h1":"Sound","h2":"Audio Room","p":"This is a <b>sad</b> room"},{"h1":"Edit","h2":"Grading Room","p":"This is an <b>important</b> room"}],"members":[{"h1":"Finlay Braithwaite","h2":"Master of Design","p":"A juicer of a handy dude"},{"h1":"Alex Kurina","h2":"Great Person","p":"What else can be said?"},{"h1":"Tony! Toni! Tone!","h2":"Three Tonys!","p":"What!!!!!"}]}]}');
    console.log(VSC);

    setText(currentHash, currentTier);


    function setText(index, tier) {

        let tierCALC = Math.abs(tier % 3);
        console.log(tierCALC);

        if (tierCALC == 0) {
            $("h1").text("Victory Social Club");
            $("h2").text("Collaborative Community");
            $("p").text("Victory Social Club is great. I love it to bits");
            $(".nav").text("");
        } else if (tierCALC == 1) {
            //let memberNO = VSC["Victory Social Club"].members.length;
            let memberCALC = Math.abs(index % VSC["Victory Social Club"]["0"].members.length);
            i = memberCALC.toString();
            //let name = VSC["Victory Social Club"].members[i].name;
            let name = VSC["Victory Social Club"]["0"].members[i].h1;
            let title = VSC["Victory Social Club"]["0"].members[i].h2;
            let bio = VSC["Victory Social Club"]["0"].members[i].p;
            $("h1").text(name);
            $("h2").text(title);
            $("p").text(bio);
            //$(".left").text(VSC["Victory Social Club"]["0"].members[].h1;);

        } else if (tierCALC == 2) {
            //let memberNO = VSC["Victory Social Club"].members.length;
            let placeCALC = Math.abs(index % VSC["Victory Social Club"]["0"].places.length);
            i = placeCALC.toString();
            //let name = VSC["Victory Social Club"].members[i].name;
            let name = VSC["Victory Social Club"]["0"].places[i].h1;
            let title = VSC["Victory Social Club"]["0"].places[i].h2;
            let bio = VSC["Victory Social Club"]["0"].places[i].p;
            $("h1").text(name);
            $("h2").text(title);
            $("p").html(bio);
        }

    }

    let frameOffset = 0.70;

    $(".nav").hover(function() {
        $("#CREST").css({
            "fill": "#ffffff4d"
        });
    }, function() {
        $("#CREST").css({
            "fill": "#60503257"
        });
    });
    $(".nav").mousedown(function() {});

    $(".left").click(function() {
        currentHash++;
        setText(currentHash, currentTier);
        $("#CREST").css({
            "transform": "rotate(0turn)"
        });
        $("#LOGO").css({
            "top": "50%",
            "left": "0%"
        });

    });

    $(".right").mousedown(function() {
        currentHash--;
        setText(currentHash, currentTier);
        $("#CREST").css({
            "transform": "rotate(.25turn)"
        });
        $("#LOGO").css({
            "top": "50%",
            "left": "100%"
        });

    });

    $(".up").mousedown(function() {
        currentTier--;
        setText(currentHash, currentTier);
        //console.log(currentHash, currentTier);

        $("#CREST").css({
            "transform": "rotate(.5turn)"
        });
        $("#LOGO").css({
            "top": "0%",
            "left": "50%"
        });

    });

    $(".down").mousedown(function() {
        currentTier++;
        setText(currentHash, currentTier);
        //console.log(currentHash, currentTier);

        $("#CREST").css({
            "transform": "rotate(.75turn)"
        });
        $("#LOGO").css({
            "top": "100%",
            "left": "50%"
        });

    });

});
