// function shower(){
//     let icon = document.getElementById('click');
//     let click = document.querySelectorAll('.F-middel-dpl-show-right')
//     click.forEach(item => {
//     item.addEventListener('click', event => {
//       console.log(i)
//     })
//   })

// }shower()

const btn = document.querySelectorAll('.F-middel-dpl-show-right');
const sho = document.querySelectorAll('.F-middel-dpl-hide');
const contant = document.querySelectorAll('#contant')
const area = document.querySelector('.maim-row-F');

btn.forEach(item=>{
      item.addEventListener('click',function(){
        // area.classList.toggle("activat")
        area.classList.remove('activat')
        item.classList.toggle('activat') 
      })
})




