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


const stickyElement = document.querySelector('main aside');
const parentElement = stickyElement.parentElement;

// Create sentinels
const topSentinel = document.createElement('div');
topSentinel.style.height = '1px'; // Make it practically invisible
topSentinel.style.width = '100%';
parentElement.insertBefore(topSentinel, stickyElement);

const bottomSentinel = document.createElement('div');
bottomSentinel.style.height = '1px';
bottomSentinel.style.order = '2';
bottomSentinel.style.width = '100%';
parentElement.appendChild(bottomSentinel); // Place after sticky element

const double = document.getElementById('intersectCheck');

let isSticky = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.target === topSentinel) {
            isSticky = true; // If top sentinel is not intersecting, it's stuck
        } else if (entry.target === bottomSentinel) {
            if (isSticky && entry.isIntersecting) {
                isSticky = false;
            } 
        } else if (entry.target === double && entry.isIntersecting) {
            if (!isSticky) {
                isSticky = true;
            }
        }
        // You can now use the 'isSticky' variable to update state or apply classes
        if (isSticky) {
            console.log('Sticky element is unstuck!');
            stickyElement.classList.add('is-sticky','top');
            parentElement.style.alignItems = 'flex-start';
            
        } else {
            console.log('Sticky element is stuck.');
            stickyElement.classList.remove('is-sticky');
            parentElement.style.alignItems = 'flex-end';
        }
    });
}, {
    root: null, // Observe relative to the viewport
    threshold: 0 // Trigger when even a tiny part intersects
});

if (window.innerWidth > 1147) {
    observer.observe(topSentinel);
    observer.observe(bottomSentinel);
    observer.observe(double);
};
