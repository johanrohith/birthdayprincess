// ========================================
// Spotify Playlist
// ========================================

const playlist =
"https://open.spotify.com/playlist/5jqM5FfQ0YQX5nlCCpXtgH?si=w2Eu7YoXSvWdhQ4o7HEZnA&utm_source=copy-link&pi=2mDQ5ivnQXqJX";

// ========================================

const page1=document.getElementById("page1");
const page2=document.getElementById("page2");
const page3=document.getElementById("page3");

const continueBtn=document.getElementById("continueBtn");
const checkBtn=document.getElementById("checkBtn");
const surpriseBtn=document.getElementById("surpriseBtn");

const answer=document.getElementById("answer");
const error=document.getElementById("error");

const decrypt=document.getElementById("decrypt");

// ========================================

continueBtn.onclick=()=>{

page1.classList.remove("active");

setTimeout(()=>{

page2.classList.add("active");

},300);

};

// ========================================

checkBtn.onclick=()=>{

let text=answer.value
.trim()
.toLowerCase()
.replace(/\s+/g," ");

if(
text==="jasmine" ||
text==="princess jasmine"
){

page2.classList.remove("active");

setTimeout(()=>{

page3.classList.add("active");

startAnimation();

},300);

}

else{

error.innerHTML="❌ Try again 😊";

answer.focus();

}

};

// ========================================

function startAnimation(){

surpriseBtn.style.display="none";

decrypt.innerHTML=`
<p style="margin-bottom:18px;font-size:20px;">
Decrypting surprise...
</p>

<pre id="hack" style="
font-size:18px;
font-family:monospace;
line-height:2;
color:#9efcff;
text-shadow:0 0 10px cyan;
"></pre>
`;

const hack=document.getElementById("hack");

const frames=[

`█░░░░░░░░░ 10%`,

`███░░░░░░░ 30%`,

`█████░░░░░ 50%`,

`███████░░░ 70%`,

`█████████░ 90%`,

`██████████ 100%

✓ Access Granted`

];

let i=0;

const timer=setInterval(()=>{

hack.textContent=frames[i];

i++;

if(i>=frames.length){

clearInterval(timer);

setTimeout(()=>{

fadeButton();

},800);

}

},650);

}

// ========================================

function fadeButton(){

surpriseBtn.style.display="inline-block";

requestAnimationFrame(()=>{

surpriseBtn.style.opacity="1";

surpriseBtn.style.transform="translateY(0)";

});

pulse();

}

// ========================================

function pulse(){

setInterval(()=>{

surpriseBtn.animate(

[
{
transform:"scale(1)"
},
{
transform:"scale(1.05)"
},
{
transform:"scale(1)"
}
],

{
duration:1800
}

);

},2500);

}

// ========================================

surpriseBtn.onclick=()=>{

surpriseBtn.animate(

[
{
transform:"scale(1)"
},
{
transform:"scale(.92)"
},
{
transform:"scale(1)"
}
],

{
duration:250
}

);

setTimeout(()=>{

window.open(
playlist,
"_blank"
);

},220);

};

// ========================================

answer.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

checkBtn.click();

}

});

// ========================================

document.addEventListener(
"contextmenu",
e=>e.preventDefault()
);

document.addEventListener(
"dragstart",
e=>e.preventDefault()
);
