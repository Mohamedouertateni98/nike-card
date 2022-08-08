let circle = document.querySelector(".color-option");

   circle.addEventListener("click", (e)=>{
     let target = e.target;
     if(target.classList.contains("circle")){
       circle.querySelector(".active").classList.remove("active");
       target.classList.add("active");
       document.querySelector(".main-images .active").classList.remove("active");
       document.querySelector(`.main-images .${target.id}`).classList.add("active");
     }
   });

  

   let qte = document.querySelectorAll('.price_num');
   let plus= Array.from(document.getElementsByClassName('fa-solid fa-plus'));
   for(let i= 0; i < plus.length; i++){
       plus[i].addEventListener('click',function (e){
           e.preventDefault()
           qte[i].innerText++;
           price_num();
           });
   }