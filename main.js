import './style.css'

const navItems = document.querySelectorAll('.mainNavLink')
const innerLists = document.querySelectorAll('.innerList')

const handelList = (e) => {
  const innerList = e.target.childNodes[1]
  if(innerList){
    innerList.classList.add("active")
    console.log('inner list ---- ', innerList);
    innerList.addEventListener('mouseenter', handelList)
  }
}

navItems.forEach(navItem => {
  navItem.addEventListener('mouseenter', handelList)
})



// innerLists.forEach(il => {
//   il.addEventListener('mouseleave', () => {
//     il.style.display = "none"
//   })
// })
