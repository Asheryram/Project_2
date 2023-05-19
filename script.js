let submit =document.getElementById("b1");
let reset =document.getElementById("b2");
let tableinfo =document.getElementById("tableinfo");
let Name = document.getElementById("Name");
let fName = document.getElementById("fName");
let iName = document.getElementById("iName");
let batch = document.getElementById("batch");
let uNum = document.getElementById("uNum");
let oA =document.getElementById("oA");
let wD=document.getElementById("wD");
let iT=document.getElementById("iT");
let cP=document.getElementById("cP");

let Name_T = document.getElementById("Name_T");
let fName_T = document.getElementById("fName_T");
let iName_T = document.getElementById("iName_T");
let batch_T = document.getElementById("batch_T");
let uNum_T = document.getElementById("uNum_T");
let oA_T =document.getElementById("oA_T");
let wD_T=document.getElementById("wD_T");
let iT_T=document.getElementById("iT_T");
let cP_T=document.getElementById("cP_T");

let oA_S =document.getElementById("oA_S");
let wD_S=document.getElementById("wD_S");
let iT_S=document.getElementById("iT_S");
let cP_S=document.getElementById("cP_S");

submit.addEventListener('click',function(){
console.log("submitted");
Name_T.innerText = Name.value;
fName_T.innerText = fName.value;
iName_T.innerText = iName.value;
batch_T.innerText = batch.value;
uNum_T.innerText = uNum.value;
oA_T.innerText = oA.value;
wD_T.innerText = wD.value;
iT_T.innerText = iT.value;
cP_T.innerText = cP.value;

oA_S.innerText = (oA.value > 40) ? 'Pass' : 'Fail';
wD_S.innerText = (wD.value > 40) ? 'Pass' : 'Fail';
iT_S.innerText = (iT.value > 40) ? 'Pass' : 'Fail';
cP_S.innerText = (cP.value > 40) ? 'Pass' : 'Fail';

tableinfo.classList.remove('hidden');

});


reset.addEventListener('click',function(){
    console.log("reset");
    tableinfo.classList.add('hidden');
    Name_T.innerText = Name.value;
fName.value = '';
iName.value = '';
batch.value = '';
uNum.value = '';
oA.value = '';
wD.value = '';
iT.value = '';
cP.value = '';
});