var typed = new Typed('.about', {
    strings: [
      `I started web design at the age of 13 and have been passionately learning and gaining experience over the past four years. 
      In the last two years, I have worked professionally on various projects, improving my skills in web design and development. 
      I am currently studying Computer Science and plan to continue my studies up to a Master's degree. 
      My goal is to combine academic knowledge with practical experience to deliver creative and practical solutions in web design and development.`
    ],
    typeSpeed: 5,
    backSpeed: 15,
    backDelay: 2000,
    loop: false
  });
    

  const mouseShadow = document.getElementById("mouseShadow")
  
  document.addEventListener("mousemove", (e)=> {
    const offsetX = mouseShadow.offsetWidth / 2;
    const offsetY = mouseShadow.offsetHeight / 2;

    setTimeout(
      () => {
        mouseShadow.style.left = (e.clientX - offsetX) + "px";
        mouseShadow.style.top = (e.clientY - offsetY) + "px";
      },
      50
    )
  })

  const linkTwo = document.getElementById("link2")
  const linkThree = document.getElementById("link3")
  const hover = document.querySelector(".hover-bg")

  linkTwo.addEventListener("mouseenter", () => {
    hover.classList.add("mid")
    hover.classList.remove("w-20")
    hover.classList.add("w-24")
  })
  linkTwo.addEventListener("mouseleave", () => {
    hover.classList.remove("mid")
  })
  linkThree.addEventListener("mouseenter", () => {
    hover.classList.add("end")
  })
  linkThree.addEventListener("mouseleave", () => {
    hover.classList.remove("end")
  })