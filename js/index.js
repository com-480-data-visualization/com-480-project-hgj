// sections
const dom_wlcSection  = _("row-welcome")
const dom_viz1Section = _("row-viz1")
const dom_viz2Section = _("row-viz2")
const dom_viz3Section = _("row-viz3")

// Welcom Section
const dom_wlcBtn = _("welc-btn")

// Navbar
const dom_navBurgerIcon = _("nav-burger-icon")
const dom_navLinksCtr   = _("nav-links-ctr")
const dom_navRow        = _("row-navbar")
const dom_navBtnWelcome = _("nav-link-section-1")
const dom_navBtnViz1    = _("nav-link-section-2")
const dom_navBtnViz2    = _("nav-link-section-3")
const dom_navBtnViz3    = _("nav-link-section-4")
let isNavOpen = false;

function scrollToDiv(pElem){
    window.scroll({
        top: pElem.offsetTop - 60, 
        left: 0, 
        behavior: 'smooth' 
    })
}

function openNav(){
    makeSureClassExists(dom_navLinksCtr, "nav-links-ctr-visible")
    makeSureClassExists(dom_navRow,"row-navbar-overlay")
    isNavOpen = true
}

function closeNav(){
    makeSureClassDoesNotExist(dom_navLinksCtr, "nav-links-ctr-visible")
    makeSureClassDoesNotExist(dom_navRow,"row-navbar-overlay")
    isNavOpen = false
}

// navbar button clicks
dom_navBtnWelcome.onclick = () => {
    scrollToDiv(dom_wlcSection)
    closeNav()
}
dom_navBtnViz1.onclick = () => {
    scrollToDiv(dom_viz1Section)
    closeNav()
}
dom_navBtnViz2.onclick = () => {
    scrollToDiv(dom_viz2Section)
    closeNav()
}
dom_navBtnViz3.onclick = () => {
    scrollToDiv(dom_viz3Section)
    closeNav()
}

// Welcome Section
dom_wlcBtn.onclick = ()=>{
    scrollToDiv(dom_viz1Section)
}

// Handling navbar show/hide on mobile displays
dom_navBurgerIcon.onclick= () => {
    if (!isNavOpen){
        openNav()
    }else{
        closeNav()
    }
}

window.onresize = ()=>{
    if (window.innerWidth > 600) {
        makeSureClassDoesNotExist(dom_navLinksCtr, "nav-links-ctr-visible")
        makeSureClassDoesNotExist(dom_navRow,"row-navbar-overlay")
        isNavOpen = false
    }
}