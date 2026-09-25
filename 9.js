let text = prompt("Enter the text");
let rtext="";
var y=0;

for(let i=0;i<text.length;i++){
    while(text[i]==" "){
        i++;
    }
    if(i==0 || text[i-1]==" " && text[i].charCodeAt(0)>=97 && text[i].charCodeAt(0)<=122){
    rtext+=String.fromCharCode(text[i].charCodeAt(0)-32)
    }else{
    rtext+=text[i];
    }
}
alert(rtext)