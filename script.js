function pass(){
    let alpha=[];
    let capital=["A ",'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let small=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let nums=[1,2,3,4,5,6,7,8,9,0]
    let special=['@', '#', '$', '%', '^', '&', '*','[',']']
    let password=[];
    let num=document.getElementById("count").value;
    let i;
    let check1=document.getElementById("check1");
    let check2=document.getElementById("check2");
    let check3=document.getElementById("check3");
    let check4=document.getElementById("check4");


    if(check1.checked==true){
         alpha=alpha.concat(capital)
    }
    if(check2.checked==true){
      alpha=alpha.concat(small)
    }
    if(check3.checked==true){
      alpha=alpha.concat(nums)
    }
    if(check4.checked==true){
      alpha=alpha.concat(special)
    }
    
    for(i=0;i<num;i++){
      let x=Math.floor(Math.random() * alpha.length);
      let y=alpha[x];
      password.push(y);
    }
    
    
let result = password.join('');
document.getElementById("ran").innerHTML=result;
}