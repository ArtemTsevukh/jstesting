const btns = document.querySelector('button');
const overlay = document.querySelector('.overlay');
//btn.onclick = function() {
 //   alert('Lois');
//};

//btn.onclick = function() {
//    alert('Lois');
//};

//let i = 0;


const deleteEl = (event) => {
    console.log(event.target);
    console.log(event.type);
   // i++;
   // if (i ==1 ) {
     //   btn.removeEventListener('click', deleteEl);
    
};
//btn.addEventListener('click', deleteEl);
//overlay.addEventListener('click', deleteEl);

btns.forEach(btn => {
    btn.addEventListener('click', deleteEl, {once:true});
});

const link = document.querySelector('a');
link.addEventListener('click', function(event) {
     event.preventDefault();

     console.log(event.target);
});



//btn.addEventListener('click',(event) => {
  //  console.log(event.target);
  //  event.target.remove();
   // //console.log('Hover');
// });





