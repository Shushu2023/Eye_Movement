//because we have to move more than one element with the class name bal
// we use getElementsByClassName which always returns an array
// the return is an array of elements with the classs name bal
const balls = document.getElementsByClassName('ball');
//===================================================================
//===========without using an event listener=======================
//=================================================================
// document.onmousemove = (event) => {
//   const x = (event.clientX * 100) / window.innerWidth + '%';
//   const y = (event.clientY * 100) / window.innerHeight + '%';

//   balls[0].style.left = x;
//   balls[0].style.top = y;
//   balls[0].transform = 'translate(-' + x + ',-' + y + ')';

//   balls[1].style.left = x;
//   balls[1].style.top = y;
//   balls[1].transform = 'translate(-' + x + ',-' + y + ')';

// };
//=============================================================================
// get a handle of the turnOff button defined in the html dom
// document.getElemetnByClass name alwayes returns an array so to access you choose the element of the array
const turnOffBtn = document.getElementsByClassName('turnOff');
//get a handle of the turnOn button defien in the html dom
const turnOnBtn = document.getElementsByClassName('turnOn');

//add the mousemove event listener when the button is clicked
turnOnBtn[0].addEventListener('click',function(event){
  // add mousemove  event listener to track the mouse movement
   document.addEventListener('mousemove',trackEyes);
   trackEyes;

  
})

//remove the mousemove event listener when the button is clicked
turnOffBtn[0].addEventListener('click',function(event){
  document.removeEventListener('mousemove',trackEyes);
})
// add mousemove  event listener to track the mouse movement
document.addEventListener('mousemove',trackEyes);

//pass the event(mouse move) to the function
function trackEyes(event){
  console.log(event);
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for(let i = 0; i< balls.length; i++){
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';

  }

 
}
