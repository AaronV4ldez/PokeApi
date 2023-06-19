var x=0
//JSON
var arr=[
    {id:1,name:"Motapod",tipo:"Inutil",evo:[
        {id:1,name:"testoh"},
        {id:1,name:"testoh2"},
    ]},
    {id:2,name:"Chorizard",tipo:"Dragont"},
]

var boton = document.getElementById('btnins')
var add = document.querySelector("#btnAdd")
add.addEventListener('click', function(){
    arr.push( {id:3,name:"Mipichula",tipo:"electrico",evo:[
        {id:1,name:"testoh"},
        {id:1,name:"testoh2"},
    ]})
    console.log(arr);
})
//funcion boton insertar
boton.addEventListener('click',function(){
    boton.innerText ="Boton "+(x++)
    let parr = document.getElementById('text')
    let todo = ""
    for(var y=2;y<x;y++){
        let color=y%2 == 1 ? "#F00" : "#0F0"
       
        todo+=`<p style="color:${color}">segs  ${y}</p>`;
    }
    parr.innerHTML = todo
})

function fn1(){

    return 1;
}

let fn2= function(){return function(){};}
let fn3 = ()=>{ return 1; }
let suma = (a,b) => a+b
let resta = (a,b) => a-b 
let sumaPro = (a,b,sss)=>sss(a,b)
console.log("La suma es: " + sumaPro(2,3,suma) )