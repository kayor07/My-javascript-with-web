 /* console.log(document.body.childNodes) */
/* for(let element of document.body.childNodes){
    console.log(element)
} */
/* console.log(document.body.parentNode) */
/* console.log(document.body.childNodes[1]) */
/* console.log(document.getElementsByTagName("div"))   *//* retrouver des elements par rapport  aux noms de balises */
/* console.log(document.getElementsByClassName("daft")) */  /* retrouver des elements par rapport  aux classes de balises */
/* console.log(document.getElementById("randomList")) */  /* retrouver des elements par rapport  aux id de balises */

/* let myUlElt = document.getElementById("omo")
console.log(myUlElt.textContent)
console.log(myUlElt.innerHTML)
 */
/* myUlElt.innerHTML= "<li>fuck </li>" */

//creation d'element 
/* let li=document.createElement("li") */
//ajout d'element
/* li.textContent='barbe' */
// ajout de l'element a un autre element
/* let ul =document.createElement("ul")
ul.appendChild(li) */
//ajout de l'element au html
/* document.body.appendChild(ul) */


/* let mydiv =document.createElement("div")

let myUl =document.createElement("ul")
let myli=document.createElement("li")
let myli2=document.createElement("li")
myli.textContent="merde"
myli2.textContent="derisoire"
myUl.appendChild(myli)
myUl.appendChild(myli2)
mydiv.appendChild(myUl)
document.body.appendChild(mydiv) */

/* let mydiv =document.createElement("div")
document.body.appendChild(mydiv)
let myul=document.createElement("ul")
mydiv.appendChild(myul)

for(let i=0;i<3;i++){
    let li=document.createElement("li")
    li.textContent="terter"
    myul.appendChild(li)
} */

/* let fruits=["orange","banane","pomme","tomate","avocat","pastèque","pamplemousse","ananas","mandarine"]
let div=document.createElement("div")
document.body.appendChild(div)
let h3=document.createElement("h3")
h3.textContent="mes fruits preferes"
div.appendChild(h3)
let ul=document.createElement("ul")
div.appendChild(ul)

for(let element of fruits){
    let li=document.createElement("li")
    li.textContent=element
    ul.appendChild(li)

    
} */

/* let mydivlist = document.getElementById("list")
let myulrandomlist=document.getElementById("randomList")
mydivlist.removeChild(myulrandomlist) */

/* let mydivlist = document.getElementById("list")
let myulrandomlist=document.getElementById("randomList")


let myul =document.createElement("ul")
myul.setAttribute("id","test")
console.log(myul)
let myli =document.createElement("li")
myli.textContent='RANge rover'
myul.appendChild(myli)
mydivlist.replaceChild(myul,myulrandomlist)
 */

/* let mydiv=document.createElement("div")
document.body.appendChild(mydiv)
mydiv.style.height="5vh"
mydiv.style.width="fitContent"
mydiv.style.backgroundColor="red"
mydiv.style.size="15vh"
mydiv.textContent="merdiqueabominable"
mydiv.style.textDecorationColor="purple"
mydiv.style.textDecoration="underline"*/
