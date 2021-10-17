
document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
   let dataText = new Array("We are students from the section called Stem 11-O.","We love to code and do things that are fun.","This website belongs & is orginally created for Stem 11-O.");
   let hours = new Date().getHours();
    let subArray:Array<string> = [];
let img = <HTMLElement>document.getElementById("timedetermine");
    if (hours >= 18 && hours <= 24){
let morningGreet = "Hello Everyone and Good Evening.";
img.setAttribute('src',"https://thumbs.gfycat.com/AmbitiousEvilArcticwolf-max-1mb.gif");
dataText.unshift(morningGreet);
    }
else if(hours >= 12 && hours <= 17){
let afternoonGreet = "Hello Everyone and Good AfterNoon.";
img.setAttribute('src',"https://thumbs.gfycat.com/IdenticalCorruptFluke-max-1mb.gif");
dataText.unshift(afternoonGreet);
}
else if(hours < 12){
 let eveningGreet = "Hello Everyone and Good Morning!";
 dataText.unshift(eveningGreet); 
img.setAttribute('src',"https://i.gifer.com/origin/51/51e587c41c5c3a3539d15908deccb6f3_w200.gif");
    }
  
    // type one text in the typwriter
    // keeps calling itself until the text is finished
   const typeWriter = (text, i, fnCallback)=> {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.getElementById("typetext").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true">|</span>';
  
        // wait for a while and call this function again for next character
        setTimeout(()=> {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     const  StartTextAnimation = (i) =>{
       if (typeof dataText[i] == 'undefined'){
          setTimeout(()=> {
            StartTextAnimation(0);
          }, 20000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, ()=>{
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
  
    StartTextAnimation(0);

    const changeSection = (section:string) =>{
     let getYear = new Date().getFullYear();
     let getMonth = new Date().getMonth();
if(getYear == 2022 && getMonth == 3){
document.getElementById("labela").innerHTML = section;
document.title = section;
}
else{
  console.log(`Year: ${getYear}`);
}

    }
    changeSection("Stem 12-O");
  
  const rickRoll = (url:string) =>{
    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    if(hr == 5 && min == 15){
location.href = url;
    }else{
      console.log("It's not yet time for rickroll.")
    }
  }
  rickRoll("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  });


 

