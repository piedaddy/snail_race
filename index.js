// document.addEventListener('DOMContentLoaded', () => {
  

// document.addEventListener('click', () => {
//   const snail = document.querySelector('.snail-racer'); 
//   let position = 0;
//   let speed = 25;
//   let snailRun = setInterval(myTimer, 1000);

//     function myTimer() {
//     if (position === 1000) {
//       clearInterval(snailRun);
//     } else {
//       position = position + speed;
//       snail.style.left = position + "px";
//     // position = position + 30;
//     }
//   }
// })

// })



document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');

  const newSnail = new Snail('Patrick', 30, 'blue');
  const newSnail2 = new Snail('Abbi', 30, 'green');



  newSnail.mount(container);
  newSnail2.mount(container);

});



// change () {
//   let snailName = this.element.querySelector('.snail-racer__name');
//   let snailShell = this.element.querySelector('.snail__shell');
//   snailName.textContent = this.name;
//   snailShell.textContent = this.color;
//   }