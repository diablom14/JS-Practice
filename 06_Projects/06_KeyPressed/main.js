window.addEventListener('keydown',(e)=>{
    let key = e.key
    console.log(key);
    
    let p = document.getElementById("text")
    p.innerText = key
})