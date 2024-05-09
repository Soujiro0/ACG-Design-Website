const searchBar = document.getElementById('searchbar');
let isOpen = false;

const openSearchbar = () => {
    if (!isOpen) {
        searchBar.style.display = 'block';
        setTimeout(() => {
            searchBar.style.width = '300px';
        }, 1);
        isOpen = true;
    }
}
const closeSearchbar = () => {
    if (isOpen){
        searchBar.style.width = '0px';
        setTimeout(() => {
            searchBar.style.display = 'none';
        }, 300);
        isOpen = false
    }
}