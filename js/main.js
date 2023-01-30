let humburger= document.querySelector(".humburger"),
mobileMenu=document.querySelector(".mobile__menu"),
menuMobileChange=document.querySelectorAll(".humburger div"),
search = document.querySelector("#search"),
tableData=document.querySelectorAll("tbody tr")




humburger.addEventListener("click",function(){
    mobileMenu.classList.toggle("show__mobile__menu");
    for(let i=0; i< menuMobileChange.length;i++){
        menuMobileChange[i].classList.toggle("change");
    }
})

// search 

search.onkeyup=function(){
let searchWord= this.value.toUpperCase();

for (let i = 0; i < tableData.length; i++) {
    td=tableData[i].getElementsByTagName("td")[0];

    
    if(td.innerHTML.toUpperCase().indexOf(searchWord)> -1 ){
      tableData[i].style.display=""
    }else{
        tableData[i].style.display="none"
    }
    
}


}