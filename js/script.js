const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');



function pageTransition(){
    for(let i=0;i<sectBtn.length;i++){
        sectBtn[i].addEventListener('click',function(){
            let currentBtn=document.querySelectorAll('.active-btn');
            
            //currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            currentBtn[0].classList.remove('active-btn');
            
            this.classList.add('active-btn');
        })
    }
    
  //allSections.forEach(element=> element.addEventListener('click',(e) => {
  
    allSections[0].addEventListener('click',(e) => {
    const id = e.target.dataset.id;
    
    if(id){
        sectBtns.forEach((btn) => {
            btn.classList.remove('active');
        })
        e.target.classList.add('active');
        sections.forEach((section)=>{
            section.classList.remove('active');
        })
        const element1 = document.getElementById(id);     
        element1.classList.add('active');
    }

});


const themeBtn = document.querySelector('.theme-btn');
//console.log(themeBtn)
themeBtn.addEventListener('click',()=>{
    let element = document.body;
    element.classList.toggle('dark-mode');
    //console.log(element);
});
}
pageTransition();