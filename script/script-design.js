/**
 *  script-design.js
 * 
 *  Author: Jerry Castrudes
 */

//Entry point
// Toggle menu
toggleSearchBar();
toggleAccordionFaqs();


// Toggle search bar (Design script) 
function toggleSearchBar(){
    const searchBarBtn = document.querySelector('.search > img');
    searchBarBtn.addEventListener('click', () => {
        const searchBar = document.querySelector('.search > .searchBarContainer');
        searchBar.classList.toggle('active');
    });
}

// Toggle Accordion in FAQS page
function toggleAccordionFaqs(){
    const accordionBtns = document.querySelectorAll('.question > button');
    
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const accordionItem = btn.nextElementSibling;
            accordionItem.classList.toggle('active');
            
            // Select the span element inside the button
            const accordionIcon = btn.querySelector('span');
            
            // Toggle the 'activeSpan' class on the span element
            accordionIcon.classList.toggle('activeSpan');
        });
    });
}
