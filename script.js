let intro = document.querySelector('.intro')
let half_bg = document.querySelectorAll('.half-bg')
let slashcont = document.querySelector('.slash-container')
let slash = document.querySelector('.slash')
let glow = document.querySelector('.glow')

window.addEventListener('load', ()=>{

    setTimeout(()=>{

        setTimeout(()=>{
            slash.classList.add('active');
            glow.classList.add('active');
        }, 200)

        setTimeout(()=>{
            slashcont.classList.add('full');
        }, 500)

        setTimeout(()=>{
            slash.classList.replace('active','fade')
            glow.classList.replace('active','fade')
            slashcont.classList.remove('full');
        }, 1500)
        setTimeout(()=>{
            half_bg.forEach((half_bg, idx)=>{
            setTimeout(()=>{
                half_bg.classList.add('fade')
            })
            })
        }, 2000)
        setTimeout(()=>{
            intro.classList.add('goaway')
        },2500)
        
        
    })
})