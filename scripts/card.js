var canvas=document.getElementById("canvas-card"),card=canvas.getContext("2d");card.font="34px KoreanKRSM";var baseCard=new Image;baseCard.src="assets/base.png",baseCard.onload=redrawBg;var logo=new Image;function redrawBg(){const e=document.querySelector("#logo-size-option").value,t=document.querySelector("#logo-offset").value;card.clearRect(0,0,canvas.width,canvas.height),card.drawImage(baseCard,0,0),showLogo&&card.drawImage(logo,canvas.width-250*e-t,canvas.height-291*e-t,250*e,291*e),showWtm&&(card.fillStyle="rgba(255, 255, 255, 0.65)",card.textAlign="left",card.fillText("skyventuree.github.io/p5cc",30,canvas.height-30))}logo.src="assets/logo.png",logo.onload=redrawBg;const textInput=document.querySelector("#content > textarea"),fontSizeInput=document.querySelector("#font-size"),fontFamilyInput=document.querySelector("#font-family"),lineCanvas=document.createElement("canvas"),canvasText=document.getElementById("canvas-text"),textCtx=canvasText.getContext("2d");let box;function redrawText(){const e=Number(document.querySelector('#delay-rate > input[type="number"]').value),t=Math.min(Math.abs(+fontSizeInput.value||120)),a=fontFamilyInput.value||"sans-serif";lineCanvas.width=canvasText.width,lineCanvas.height=2.2*t,textCtx.clearRect(0,0,canvasText.width,canvasText.height);const n=(textInput.value||"TAKE YOUR HEART").trim(),o=n.split("\n");let c=0,r=0,l=0,s=Number(document.querySelector("#text-top").value),u=0;o.forEach((d=>{setTimeout((()=>{box=new BoxText(d,{fontSize:t,fontFamily:a}),isMiddle&&(s=0,r=(canvasText.height-t*o.length)/2.5-t/5*o.length),l+=Number(box.draw(lineCanvas)-40),textCtx.drawImage(lineCanvas,0,c+r+s),c=Math.floor(l)||c,console.log(n,c,r,l)}),u),u+=e}))}const checkText=setInterval((()=>{textInput.value!==textInput.lastValue&&(textInput.lastValue=textInput.value,redrawText())}),1e3);
