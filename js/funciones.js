//hola soy un archivo de funciones java script
window.onload = ()=>{
    var arrayEle = []
    //AJAX asincrono java script & xml
    var xobj = new XMLHttpRequest()
    xobj.overrideMimeType('application/json')
    xobj.open('GET','/js/elements.json',true)
    xobj.onreadystatechange = ()=>{
        if(xobj.readyState == 4 && xobj.status== '200'){
            arrayEle = JSON.parse(xobj.responseText)
            console.log(arrayEle)
        }//llave if
    }//llave function
    xobj.send(null)
    var btn = document.querySelector("#btnFunciones")
    var btnredu = document.querySelector("#btnReduce")
    var combo = document.querySelector("#comboFamilias")
    btn.addEventListener('click',function(){
        let cont= 0
        arrayEle.elements.forEach(item=>{
            if(item.phase == 'Gas') cont ++
        })
        console.log('De Gas: ' , cont)
        arrayEle.elements.map(item=>{
            if(item.phase == 'Gas') cont ++
            if(item.density < 0.05) item.density=10
        })
        let res= arrayEle.elements.filter(item=>item.phase==combo.value)
        console.log("los elementos son: " + res)
        //IMPRIMIR EN LA LISTAh
        let lis = '';
        res.map(item=>{
            lis+=`<li> ${item.symbol} - ${item.name} </li>`
        })
        document.querySelector("#listaFilter").innerHTML = lis

        let sum= res.reduce((p,c)=> p.atomic_mass + c.atomic_mass)
        console.log("La suma es ", sum)
    })

    btnredu.addEventListener('click',function(){
        let cont= 0
       
        let res= arrayEle.elements.filter(item=>item.phase==combo.value)
        console.log("los elementos son: " + res)
        //IMPRIMIR EN LA LISTAh
        let lis = '';
        res.map(item=>{
            lis+=`<li> ${item.symbol} - ${item.name} </li>`
        })
        document.querySelector("#listaFilter").innerHTML = lis

        let sum= res.reduce((p,c)=> p.atomic_mass + c.atomic_mass)
        console.log("La suma es ", sum)
    })
}