const features = [
    {
        mockup : 'images/illustration-features-tab-1.svg',
        heading : 'Bookmark in one click',
        subheading : 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    },
    {
        mockup : 'images/illustration-features-tab-2.svg',
        heading : 'Intelligent search',
        subheading : 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    },
    {
        mockup : 'images/illustration-features-tab-3.svg',
        heading : 'Share your bookmarks',
        subheading : '  Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    },
];

const featureHeading = document.querySelector('.feature-heading');
const featureSubheading = document.querySelector('.feature-subheading');
const featureImg = document.querySelector('.feature-img img');
const sliderTabs = document.querySelectorAll('.tab');

function animateFeatureElements() {
    const animatedElements = [
        { el: featureImg, delayClass: 'animate-delay-0' },
        { el: featureHeading, delayClass: 'animate-delay-1' },
        { el: featureSubheading, delayClass: 'animate-delay-2' },
    ];
    animatedElements.forEach(({ el, delayClass }) => {
        el.classList.remove('animate', 'animate-delay-0', 'animate-delay-1', 'animate-delay-2');
        void el.offsetWidth; 
        el.classList.add('animate', delayClass);
    });
}


featureHeading.textContent = features[0].heading;
featureSubheading.textContent = features[0].subheading;
featureImg.src = features[0].mockup;

sliderTabs.forEach(tab => {
    tab.addEventListener('click' , function(){
        sliderTabs.forEach(tab => {
            tab.classList.remove('active')
        });
        this.classList.add('active')
        const index = tab.getAttribute('data-num') - 1;
        featureHeading.textContent = features[index].heading;
        featureSubheading.textContent = features[index].subheading;
        featureImg.src = features[index].mockup;
        animateFeatureElements();
    })
});


const faqTabs = document.querySelectorAll('.q');
faqTabs.forEach(tab => {
    tab.addEventListener('click' , ()=>{
        tab.classList.toggle('open');
    })
});



function validateEmail(email) {
  const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  return regex.test(email);
}

const btn = document.querySelector('.contact_us');

const textFieldDiv = document.querySelector('.input-fel');
const textField = document.getElementById('email');

btn.addEventListener('click' , ()=>{
    validateEmail(textField.value)? textFieldDiv.classList.remove('error') : textFieldDiv.classList.add('error');
});