name_of_guest_array=[];
guest_displayer_array=[];
function submit(){
var newguest=document.getElementById("register").value;
console.log(newguest);
name_of_guest_array.push(newguest);
document.getElementById("1stregister").innerHTML=name_of_guest_array;
}
function showingguestname(){
var length_of_name_of_guest_array=name_of_guest_array.length;
for(var i=0;i<length_of_name_of_guest_array;i++){
    guest_displayer_array.push("<h4>"+name_of_guest_array[i]+"</h4>");
    console.log(guest_displayer_array);
}
guest_displayer_array_without_commas=guest_displayer_array.join(" ");
for(var j=0;j<length_of_name_of_guest_array;j++){
    document.getElementById("secondregister").innerHTML=guest_displayer_array_without_commas;
}
}
function showingsortedlist(){
    sorted_name_of_guest_array=name_of_guest_array.sort();
    console.log(sorted_name_of_guest_array);
    document.getElementById("sortedlist").innerHTML="<h2>"+sorted_name_of_guest_array+"<h2>";
}
function searchguest(){
    var searchedname=document.getElementById("times").value;
    var found=0;
    for(var a=0;a<name_of_guest_array.length;a++){
        if(searchedname==name_of_guest_array[a]){
            found=found+1;
        }
    }
    document.getElementById("times2").innerHTML="Name found "+found+" time/s";
    console.log("Found name "+found+" time/s");
}
 