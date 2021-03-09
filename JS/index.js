

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav_link');

navToggle.addEventListener('click',() =>{
    document.body.classList.toggle('nav-open');
}); 


navLinks.forEach(link => {
    link.addEventListener('click', () =>{
        document.body.classList.remove('nav-open');
    })
});













var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.20) {
    // Show button
    scrollToTopBtn.classList.add("showBtn")
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn")
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)























const progressBar = document.querySelector("#progressBar");
let totalPageHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = () => {
  let newProgressHeight = (window.pageYOffset / totalPageHeight) * 100;
  progressBar.style.height = `${newProgressHeight}%`;
  progressBar.style.opacity = `${newProgressHeight}%`;
};
