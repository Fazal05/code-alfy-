const ya=document.getElementById("ya");
const nop=document.getElementById("nop");
let myht=['70px' , '90px', '110px','130px','150px','170px','190px','210px','230px','250px'];
let text=['25px','30px','40px','50px','60px','70px','80px','90px','100px','110px'];
let mywt=['80px', '100px', '120px' ,'140px','160px','180px','200px','220px','240px','260px'];
let myna=["You sure?", "Really sure?","Think again!","You might regret it!", "This could be a mistak!","Have a heart!!","Dont be so cold!","change of heart?","Is that your final answer?","You'r breaking my heart ;("];
let wtn=['90px','100px','105px','135px','160px','110px','130px','130px','170px','180px'];
let i=0;
let j=0;
let k=0;
let l=0;
let m=0;

function size(){
ya.style.height=myht[i++];
ya.style.fontSize=text[l++];
ya.style.width=mywt[j++];
nop.innerHTML=myna[k++];
nop.style.width=wtn[m++];
if(k==11){
    
    
}
   
}


nop.addEventListener("click",size);