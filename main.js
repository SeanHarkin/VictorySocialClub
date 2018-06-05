
$( document ).ready(function() {
 
    // Your code here.
 




let VSC = JSON.parse('{"Victory Social Club":{"members":[{"name":"Finlay Braithwaite","Title":"Master of Design","Bio":"A juicer of a handy dude"},{"name":"Alex Kurina","Title":"Great Person","Bio":"What else can be said?"},{"name":"Tony! Toni! Tone!","Title":"Three Tonys!","Bio":"What!!!!!"}]}}');
console.log(VSC);



let currentHash = 0;
let currentTier = 0;

setText(currentHash);

function setText(index){
let memberNO = VSC["Victory Social Club"].members.length;
let memberCALC = Math.abs(index%VSC["Victory Social Club"].members.length);	
i = memberCALC.toString();
let name = VSC["Victory Social Club"].members[i].name;
let title = VSC["Victory Social Club"].members[i].Title;
let bio = VSC["Victory Social Club"].members[i].Bio;
$( "h1" ).text( name );
$("h2").text(title);
$( "p" ).text( bio );

}




let frameOffset = 0.70;






$(".nav").hover(function(){
	$("#CREST").css({"fill":"#ffffff4d"});		
},	function(){
		$("#CREST").css({"fill":"#60503257"});		
	});
	$(".nav").mousedown(function(){
	
	
});



	$(".left").click(function(){
	currentHash++;
    setText(currentHash);
	$("#CREST").css({"transform":"rotate(0turn)"});
	$("#LOGO").css({"top":"50%", "left":"0%"});

	});


	$(".right").mousedown(function(){
	currentHash--;
    setText(currentHash);
	$("#CREST").css({"transform":"rotate(.25turn)"});
	$("#LOGO").css({"top":"50%", "left":"100%"});
	
});

	$(".up").mousedown(function(){
	$("#CREST").css({"transform":"rotate(.5turn)"});
	$("#LOGO").css({"top":"0%", "left": "50%"});
	
});

	$(".down").mousedown(function(){
	$("#CREST").css({"transform":"rotate(.75turn)"});
	$("#LOGO").css({"top":"100%", "left":"50%"});
	
	
});

});
