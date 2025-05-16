const btns = document.querySelectorAll('.btn')
const body = document.querySelector('body')

btns.forEach((btn)=>{
    btn.addEventListener("click", ()=>
    {
    const color = btn.getAttribute('id');
    body.style.backgroundColor = color;    
    })
}
)
