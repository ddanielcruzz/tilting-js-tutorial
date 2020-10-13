const card = document.querySelector('.card');
let cardRect;

card.addEventListener('mouseenter', ()=> {
   cardRect = card.getBoundingClientRect();
})


card.addEventListener("mousemove", (evt)=>{
  const x = (evt.clientX- cardRect.left) / cardRect.width;
  const xTilt = -(x - 0.5);
  const y = (evt.clientY- cardRect.top) / cardRect.height;
  const yTilt = y - 0.5;
  card.style.transform = `perspective(1000px) rotateY(${xTilt * 45}deg) rotateX(${yTilt * 45}deg)`
})

card.addEventListener('mouseleave', ()=>{
  card.style.transform = "";
})