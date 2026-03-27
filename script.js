console.log(document);

function getElement(id){
    const element = document.getElementById(id);
    return element;
}

const callbtns = document.getElementsByClassName("call-btn");
const cardHistory = document.getElementById("cardHistory");

for (let callBtn of callbtns) {
callBtn.addEventListener("click",function(){

const currentPoints = document.getElementById("point-btn").innerText;

if (currentPoints >= 20)

{

const updatePoint = Number(currentPoints) - 20;
document.getElementById("point-btn").innerText = updatePoint; 

const cardTitle = callBtn.parentNode.parentNode.children[1].innerText;
const cardNumbers = callBtn.parentNode.parentNode.children[3].innerText;
const now = new Date();
const timeString = now.toLocaleTimeString();

const cardUpdate = document.createElement("div");

    cardUpdate.innerHTML = ` <div class="px-3 py-1">
    <div class="px-4 flex justify-between p-3 bg-gray-100 rounded shadow-md gap-7 ">

                <div>
 <p class="font-bold text-sm ">${cardTitle}</p>

 <p class="r text-sm mt-1">${cardNumbers}</p>
             </div>
              <div class="font-medium">
      ${timeString}
    </div>
</div>
</div>`;

const customAlert = document.createElement("div");

 customAlert.innerHTML = `
<div class="fixed  top-2 left-1/2 -translate-x-1/2 bg-black text-white rounded-2xl shadow-2xl w-full max-w-sm mx-4 overflow-hidden">
    
    <div class="flex items-center gap-3 px-5 py-4">
      <span class="text-3xl">📞</span>
      <div>
        <p class="">Calling
      ${cardTitle} ${cardNumbers}</p>
      </div>
    </div>

    <div class= "px-6 py-2 flex justify-end">

      <button onclick="this.closest('div.fixed').remove()" 
              class="px-6 bg-green-600 text-white font-bold py-2 rounded-xl ">
        OK
      </button>

  </div>
   </div>
`;

cardHistory.appendChild(cardUpdate);
document.body.appendChild(customAlert);

}

else 
  {

const pointAlert = document.createElement("div");
 pointAlert.innerHTML = `
 <div class="fixed  top-2 left-1/2 -translate-x-1/2 bg-black text-white rounded-2xl shadow-2xl w-full max-w-sm mx-4 overflow-hidden">
    
    <div class="flex items-center gap-3 px-5 py-4 max-xl:">
      <span class="text-sm">❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ টি কয়েন লাগবে</span>
      <div>
      
      </div>
    </div>

    <div class= "px-6 py-2 flex justify-end">

      <button onclick="this.closest('div.fixed').remove()" 
              class="px-6 bg-red-600 text-white font-bold py-2 rounded-xl ">
        OK
      </button>

  </div>
   </div>



`;

document.body.appendChild(pointAlert);


}

})


}

document.getElementById("clear-btn").addEventListener("click",function(){
  const callHistory = getElement("cardHistory");
  callHistory.innerHTML= "";

})
 const heartBtns = document.getElementsByClassName("heart-btn");

for (let heartBtn of heartBtns) {
    heartBtn.addEventListener("click", function () {
        const redBtn = getElement("red-btn");
        redBtn.innerText = parseInt(redBtn.innerText) + 1;

    });
}

const copyBtns = document.getElementsByClassName("copy-btn");
for(let copyBtn of copyBtns) {
   copyBtn.addEventListener("click",function(){

    const cardCopyNumbers = copyBtn.parentNode.parentNode.parentNode.children[3].innerText;
    

    navigator.clipboard.writeText(cardCopyNumbers).then(() => {
    let totalCopy =  getElement("copy-count").innerText; 
    totalCopy = parseInt(totalCopy) + 1;
    getElement("copy-count").innerText = totalCopy;

    
    
 const copyAlert = document.createElement("div");
 copyAlert.innerHTML = `
<div class="fixed  top-2 left-1/2 -translate-x-1/2 bg-black text-white rounded-2xl shadow-2xl w-full max-w-sm mx-4 overflow-hidden">
    <div class="flex items-center gap-3 px-5 py-4">
      <span class="text-xl">©️নাম্বার কপি হয়েছে:${cardCopyNumbers}</span>
     
    </div>

    <div class= "px-6 py-2 flex justify-end">

      <button onclick="this.closest('div.fixed').remove()" 
              class="px-6 bg-green-600 text-white font-bold py-2 rounded-xl ">
        OK
      </button>

  </div>
   </div>
`;

document.body.appendChild(copyAlert);
}).catch(() => {
            alert("Failed to copy!");
        });
 });
}