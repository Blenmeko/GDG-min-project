function isyouhuman() {
let question1 = prompt("Do you breath? (yeah air, just say yes/no): ");
  let count=0;
  if(question1==="yes"){
    count=count+1;
  }
    if(question1=== null){
        alert("Cancelled.");
        return;
    }
let question2 = prompt("Did you watch Attack On Titan? ");
 if(question2==="yes"){
    count=count+1;}
  if(question2=== null){
        alert("Cancelled.");
        return;
    }
let question3 = prompt("Did you use Tiktok? ");
 if(question3==="yes"){
    count=count+1;}
  if(question3=== null){
        alert("Cancelled.");
        return;
    }
let question4 = prompt("Do you hate amharic movies? ");
 if(question4==="yes"){
    count=count+1;}
  if(question4=== null){
        alert("Cancelled.");
        return;
    }
let question5 = prompt("Do you laugh when kids fall? ");
 if(question5==="yes"){
    count=count+1;}
  if(question5=== null){
        alert("Cancelled.");
        return;
    }
 if(count==0){
    alert("SHAME!! Your are NOT a hooman!")
 }
 else if(count==1){
    alert("Hmm, Quite disappointing...")
 }
 else if(count==2){
    alert("Too good for a potato, but not good enough for a human.")
 }
 else if(count==3){
    alert("Well, I see potential.")
 }
 else if(count==4){
    alert("Veryy Good. You are a human. ")
 }
 else{
    alert("APPLAUSEEEE! YOU ARE PEAK HUMAN!")
 }
}
