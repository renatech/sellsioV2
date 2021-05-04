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
})