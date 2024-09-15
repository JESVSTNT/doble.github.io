const izquierdo= document.querySelector(".izquierdo");
const derecho= document .querySelector(".derecho");
const contenedor= document.querySelector(".contenedor");

izquierdo.addEventListener('mouseenter', ()=>{
    contenedor.classList.add("izquierdo-seleccionado");
});

izquierdo.addEventListener('mouseleave', ()=>{
    contenedor.classList.remove("izquierdo-seleccionado")
});

derecho.addEventListener('mouseleave', ()=>{
    contenedor.classList.remove("derecho-seleccionado")
});

derecho.addEventListener('mouseenter', ()=>{
    contenedor.classList.add("derecho-seleccionado");
});
