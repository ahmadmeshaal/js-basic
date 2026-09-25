let text = prompt("Enter the text");
let rtext="";
var y=0;
for(let i=0;i<text.length;i++){
if(text[y].charCodeAt(0)>=65&&text[y].charCodeAt(0)<=90){
    rtext+=String.fromCharCode(text[y].charCodeAt(0)+32)
    y++;
    }
    else if(text[y].charCodeAt(0)>=97&&text[y].charCodeAt(0)<=122){
    rtext+=String.fromCharCode(text[y].charCodeAt(0)-32)
     y++;   
    }
}
alert(rtext)