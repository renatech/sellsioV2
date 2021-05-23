(function({menuButton = '', sideBar = '', sideBarDropdown = ''} = {}) {
    menuButton.addEventListener('click',(button)=>{
        button.preventDefault()
        sideBar.classList.toggle('open')
    })
    
    Array.from(sideBarDropdown).forEach((dropDownButton)=>{
        dropDownButton.addEventListener('click' ,(button)=>{
            button.preventDefault()
            sideBar.classList.add('open')
            console.log(button.target)
            // document.querySelector(`.sidebar .sublink#${button.dataset.target}`)
            // .classList.toggle('show')
        })
    })
})({
    menuButton: document.querySelector('.sidebar .menu-button'),
    sideBar: document.querySelector('.sidebar'),
    sideBarDropdown: document.querySelectorAll('.sidebar .sidebar-dropdown')
});

/**
 * Point of sale code
 */
 (function(){
    const posProduct = document.querySelectorAll('.pos-product');
    const categoryTrigger = document.querySelector('#category_button');
    const categorySidebar = document.querySelector('#category_sidebar');
    const closeSidebarButton = document.querySelector('#close_category_sidebar');
    const closeModalButton = document.querySelector('#close_modal')
    const modal = document.querySelector('.modal-background')

    categoryTrigger?.addEventListener('click',(button)=>{
        button.preventDefault()
        categorySidebar.classList.remove('hidden')
    })

    closeSidebarButton?.addEventListener('click',(button)=>{
        button.preventDefault()
        categorySidebar.classList.add('hidden')
    })

    closeModalButton?.addEventListener('click',(event)=>{
        modal.classList.add('hidden')
    })

})();
