/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

let sixSectons = document.querySelectorAll('section');
let fragment = document.createDocumentFragment();
let addSection = document.getElementById('addSection');
let listOfNav = document.getElementById('navbar__list');
let goUp = document.getElementById('goUp');

// Add new section to the page
function addAnotherSection() {
    addSection.addEventListener('click', () => {
        let newSection = document.createElement('section');
        newSection.setAttribute('id', 'section' + (sixSectons.length + 1));
        newSection.setAttribute('data-nav', 'Section ' + (sixSectons.length + 1));
        newSection.innerHTML = `<div class="landing__container">
        <h2>Section ${sixSectons.length + 1}</h2>
        <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        fermentum metus faucibus lectus pharetra dapibus. Suspendisse
        potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
        lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
        convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
        eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam
        nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis
        lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a
        tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus
        vitae elit. Integer nec libero venenatis libero ultricies molestie
        semper in tellus. Sed congue et odio sed euismod.
        Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar
        gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam.
        Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum
        consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget
        elementum tortor mollis non mount63.</p>
        </div>`;
        document.querySelector('main').appendChild(newSection);
        if (!document.querySelector(`a[href="#${newSection.id}"]`)) {
            let navItem = document.createElement('li');
            navItem.innerHTML = `<a href="#${newSection.id}" class="menu__link ${newSection.dataset.nav}" data-nav="${newSection.id}">${newSection.dataset.nav}</a>`;
            listOfNav.appendChild(navItem);
        } else {
            alert('Section exists!');
        }
    });
}
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Helper function to check if an element is in the viewport
function InViewport(element) {
    let rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.right <= (this.innerWidth || document.documentElement.clientWidth)&&
        rect.bottom <= (this.innerHeight || document.documentElement.clientHeight) &&
        rect.left >= 0 
    );
}

// Scroll to top button
function scrollUp() {
    goUp.addEventListener('click', () => {
        this.scrollTo({top: 0, behavior: "smooth"});
    });
    this.addEventListener('scroll', () => {
        if (this.scrollY > 250) {
            goUp.style.display = 'block';
        } else {
            goUp.style.display = 'none';
        }
    });
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavigationBar() {
    sixSectons.forEach(section => {
        let navItem = document.createElement('li');
        navItem.innerHTML = `<a href="#${section.id}" class="menu__link ${section.dataset.nav}" data-nav="${section.id}">${section.dataset.nav}</a>`;
        fragment.appendChild(navItem);
    });
    listOfNav.appendChild(fragment);
    listOfNav.addEventListener('click', (e) => {
        e.preventDefault();
        let section = document.getElementById(e.target.dataset.nav);
        section.scrollIntoView({behavior: "smooth"});
    });
        // nav bar active state on scroll and click
    this.addEventListener('scroll', () => {
        sixSectons.forEach(section => {
            if (InViewport(section)) {
                let activeLink = document.querySelector(`[data-nav=${section.id}]`);
                activeLink.classList.add('active');
            } else {
                let activeLink = document.querySelector(`[data-nav=${section.id}]`);
                activeLink.classList.remove('active');
            }
        });
    })
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
addAnotherSection();
// Scroll to top button
scrollUp();
// Add new section
buildNavigationBar();
