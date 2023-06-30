// Typing Effect 
var i= 0,text;
text=  " "+"Chasing Jobs ? Let jobs chase you. ";
function typing(){
 if(i<text.length){
 document.getElementById("typing-effect").innerHTML+= text.charAt(i);
 i++;
    setTimeout(typing ,200); 
     }


}
typing();