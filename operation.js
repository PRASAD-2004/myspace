var C=document.getElementById("+")
function display(){
    var c=document.getElementById("+")
    var txt=c.innerHTML
    console.log(txt)
    var d=document.getElementById("entered value")
    
    d.value=d.value+txt
}
C.addEventListener("click",display)

var C=document.getElementById("1")
function display1(){
    var c=document.getElementById("1")
    var txt=c.innerHTML
    console.log(txt)
    var d=document.getElementById("entered value")
    d.value=d.value+txt
}
C.addEventListener("click",display1)

var C=document.getElementById("2")
function display2(){
    var c=document.getElementById("2")
    var txt=c.innerHTML
    console.log(txt)
    var d=document.getElementById("entered value")
    
    d.value=d.value+txt
}
C.addEventListener("click",display2)

var C=document.getElementById("3")
function display3(){
    var c=document.getElementById("3")
    var txt=c.innerHTML
    console.log(txt)
    var d=document.getElementById("entered value")
    
    d.value=d.value+txt
}
C.addEventListener("click",display3)

var C=document.getElementById("4")
function display4(){
    var c=document.getElementById("4")
    var txt=c.innerHTML
    console.log(txt)
    var d=document.getElementById("entered value")
    
    d.value=d.value+txt
}
C.addEventListener("click",display4)

var C=document.getElementById("5")
function display5(){
    var c=document.getElementById("5")
    var txt=c.innerHTML
    console.log(txt)
    var d=document.getElementById("entered value")
    
    d.value=d.value+txt
}
C.addEventListener("click",display5)

var C=document.getElementById("6")
function display6(){
    var c=document.getElementById("6")
    var txt=c.innerHTML
    console.log(txt)
    var d=document.getElementById("entered value")
    
    d.value=d.value+txt
}
C.addEventListener("click",display6)

var C=document.getElementById("7")
function display7(){
    var c=document.getElementById("7")
    var txt=c.innerHTML
    console.log(txt)
    var d=document.getElementById("entered value")
    
    d.value=d.value+txt
}
C.addEventListener("click",display7)

var C=document.getElementById("8")
function display8(){
    var c=document.getElementById("8")
    var txt=c.innerHTML
    console.log(txt)
    var d=document.getElementById("entered value")
    
    d.value=d.value+txt
}
C.addEventListener("click",display8)

var C=document.getElementById("9")
function display9(){
    var c=document.getElementById("9")
    var txt=c.innerHTML
    console.log(txt)
    var d=document.getElementById("entered value")
    
    d.value=d.value+txt
}
C.addEventListener("click",display9)



var C=document.getElementById("=")
function display10(){
    var c=document.getElementById("=")
    var txt=c.innerHTML
    console.log(txt)
    var d=document.getElementById("entered value")
    console.log(d.value)
    operation(d.value)
}
C.addEventListener("click",display10)

var C=document.getElementById("-")
function display11(){
    var c=document.getElementById("-")
    var txt=c.innerHTML
    console.log(txt)
    var d=document.getElementById("entered value")
    
    d.value=d.value+txt
}
C.addEventListener("click",display11)

var C=document.getElementById("X")
function display12(){
    var c=document.getElementById("X")
    var txt="*"
    console.log(txt)
    var d=document.getElementById("entered value")
    
    d.value=d.value+txt
}
C.addEventListener("click",display12)

var C=document.getElementById("/")
function display13(){
    var c=document.getElementById("/")
    var txt=c.innerHTML
    console.log(txt)
    var d=document.getElementById("entered value")
    
    d.value=d.value+txt
}
C.addEventListener("click",display13)

var C=document.getElementById("0")
function display14(){
    var c=document.getElementById("0")
    var txt=c.innerHTML
    console.log(txt)
    var d=document.getElementById("entered value")
    
    d.value=d.value+txt
}
C.addEventListener("click",display14)

var C=document.getElementById(".")
function display15(){
    var c=document.getElementById(".")
    var txt=c.innerHTML
    console.log(txt)
    var d=document.getElementById("entered value")
    
    d.value=d.value+txt
}
C.addEventListener("click",display15)

var C=document.getElementById("%")
function display16(){
    var c=document.getElementById("%")
    var txt=c.innerHTML
    console.log(txt)
    var d=document.getElementById("entered value")
    
    d.value=d.value+txt
}
C.addEventListener("click",display16)

var C=document.getElementById("C")
function display17(){
    var c=document.getElementById("C")
    var txt=c.innerHTML
    console.log(txt)
    var d=document.getElementById("entered value")
    d.value=""
    var out=document.getElementById("output value")
    out.value=""
    
}
C.addEventListener("click",display17)

var C=document.getElementById("backspace")
function display18(){
    var c=document.getElementById("backspace")
    var txt=c.innerHTML
    console.log(txt)
    var d=document.getElementById("entered value")
    var dt=d.value
    var dd=dt.substring(0,dt.length-1)
    console.log(dd)
    d.value=dd
}
C.addEventListener("click",display18)

var C=document.getElementById("()")
function display19(){
    var c=document.getElementById("()")
    var txt=c.innerHTML
    console.log(txt)
    var d=document.getElementById("entered value")
    
    d.value=d.value+txt
}
C.addEventListener("click",display19)

function refresh(){
    location.reload()
}



function operation(attrvalue){

    var at=eval(attrvalue)
    console.log(at)
    var out=document.getElementById("output value")
    out.value=at

}





