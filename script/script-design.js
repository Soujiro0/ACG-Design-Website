/**
 *  script-design.js
 * 
 *  Author: Jerry Castrudes
 */

//Entry point
// Toggle menu
toggleSearchBar();
toggleAccordionFaqs();
toggleSegment();
toggleDropdownChecklist();


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

// Toggle Segment in Item Details
function toggleSegment(){

    const buttons = document.querySelectorAll('.segment-button');
    const panels = document.querySelectorAll('.segment-panel');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            // Hide all panels
            panels.forEach(panel => panel.classList.remove('active'));
            // Show the target panel
            const targetPanel = document.querySelector(button.dataset.target);
            targetPanel.classList.add('active');
        });
    });

}

// Toggle Dropdown checklist in Item Details
function toggleDropdownChecklist(){

    const toggleButton = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const checkboxes = dropdownMenu.querySelectorAll('input[type="checkbox"]');
    const inputCheckbox = dropdownMenu.querySelector('.input-checkbox');
    const inputText = dropdownMenu.querySelector('.input-text');
    const maxCheckboxes = 3; // Maximum number of checkboxes allowed to be checked
    
    // Toggle dropdown visibility
    toggleButton.addEventListener('click', () => {
        dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Close the dropdown when clicking outside
    document.addEventListener('click', (event) => {
        if (!dropdownMenu.contains(event.target) && !toggleButton.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
    
    // Handle checkbox change event
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            if (checkbox === inputCheckbox) {
                inputText.disabled = !inputCheckbox.checked;
            }
            
            const checkedCheckboxes = Array.from(checkboxes).filter(cb => cb.checked);
            
            if (checkedCheckboxes.length > maxCheckboxes) {
                checkbox.checked = false;
                if (checkbox === inputCheckbox) {
                    inputText.disabled = true;
                }
                return;
            }
            
            const selectedOptions = checkedCheckboxes.map(cb => {
                if (cb === inputCheckbox) {
                    return inputText.value.trim() !== '' ? inputText.value : 'Custom Option';
                } else {
                    return cb.value;
                }
            });
            toggleButton.innerHTML = selectedOptions.length > 0 
                ? `Color Palette (choose 2-3 colors): ${selectedOptions.join(', ')} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0);transform: ;msFilter:;"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>` 
                : 'Color Palette (choose 2-3 colors): <span style="display: block; margin-left: auto;">Default</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0);transform: ;msFilter:;"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>';
        });
    });
    
    // Update button text when input value changes
    inputText.addEventListener('input', () => {
        if (inputCheckbox.checked) {
            const checkedCheckboxes = Array.from(checkboxes).filter(cb => cb.checked);
            const selectedOptions = checkedCheckboxes.map(cb => {
                if (cb === inputCheckbox) {
                    return inputText.value.trim() !== '' ? inputText.value : 'Custom Option';
                } else {
                    return cb.value;
                }
            });
            toggleButton.innerHTML = selectedOptions.length > 0 
                ? `Color Palette (choose 2-3 colors): ${selectedOptions.join(', ')} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0);transform: ;msFilter:;"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>` 
                : 'Color Palette (choose 2-3 colors): <span style="display: block; margin-left: auto;">Default</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0);transform: ;msFilter:;"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>';
        }
    });

}