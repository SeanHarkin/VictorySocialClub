$(document).ready(() => {
const $up = $('#up');
$up.on( 'click', () => {
$("button").click(function(){
    $.get("demo_test.asp", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
})
