

//Refrence & Selector
const mobileCta = document.getElementById("mobile-cta");
const nav = document.querySelector(".x-nav");
const mobilebtnExit = document.getElementById("mobile-exit");

    mobileCta.addEventListener("click",() =>{
        nav.classList.add("mobile-menu");
    })

    mobilebtnExit.addEventListener("click",() =>{
        nav.classList.remove("mobile-menu");
    })


/**
document.getElementById('join-waitlist').addEventListener('click', function() {
    document.querySelector('.meet1').style.display='flex';        
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.meet1').style.display='none';
});       

//
document.getElementById('talk').addEventListener('click', function() {
    document.querySelector('.talk1').style.display='flex';        
});

document.querySelector('.remove').addEventListener('click', function() {
    document.querySelector('.talk1').style.display='none';
});
*/