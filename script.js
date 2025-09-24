

 function showDiv(num) {
      document.querySelectorAll('.infolinks > a').forEach((a)=>{
        a.classList.remove('linkActive');
      })
      document.querySelectorAll('.content > div').forEach(div => {
        div.classList.remove('active');
      });
      document.getElementById('div' + num).classList.add('active');
      document.getElementById('link' + num).classList.add('linkActive')
      
}

// slider
  
     const container = document.getElementById("container");
      
  
  function scrollright(){
    const last = container.lastElementChild; // get last div
    container.insertBefore(last, container.firstElementChild); 
  }

  console.log(container);
  
  function scrollleft(){
    const first = container.firstElementChild;
    container.appendChild(first);
  }

  //slider for review cards

  const cardscontainer = document.getElementById('reviewCards');

  function scrollright2(){
    const last = cardscontainer.lastElementChild; // get last div
    cardscontainer.insertBefore(last, cardscontainer.firstElementChild); 
  }
 
   
  function scrollleft2(){
    const first = cardscontainer.firstElementChild;
    cardscontainer.appendChild(first);
  }


 


  // quctions / A section

   const buttons = document.querySelectorAll(".toggle-btn, .toggle-btn2");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const faq = btn.closest(".faq");
      const answer = faq.querySelector(".answer");

      // Close all answers across both columns
      document.querySelectorAll(".faq .answer").forEach(a => {
        if (a !== answer) {
          a.classList.remove("show");
          a.previousElementSibling.querySelector("button").textContent = "+";
        }
      });

      // Toggle current
      answer.classList.toggle("show");
      btn.textContent = answer.classList.contains("show") ? "x" : "+";
    });
  });


  const menuIcon = document.querySelector(".navLinkMenu .fa-bars");
const mobileMenu = document.querySelector(".navLinksmobile");

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});