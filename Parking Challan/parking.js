let i=1;
let sub = document.getElementById("sub")
sub.addEventListener("click",function(){


    let name = document.getElementById("name")

    let bikeno = document.getElementById("bikeno")

    let contact = document.getElementById("contact")

    let checkin = document.getElementById("checkin")

    let checkout = document.getElementById("checkout")


    // if(name.value,bikeno.value,contact.value,checkin.value,checkout.value === ""){
    //     alert("dont leave empty")


    // }
    if(name.value===""){
        let nman = name.nextSibling.textContent="manditory"
    } 
    if(bikeno.value===""){
        let nman = bikeno.nextSibling.textContent="manditory"
    } 
    if(contact.value===""){
        let nman = contact.nextSibling.textContent="manditory"
    } 
    if(checkin.value===""){
        let nman = checkin.nextSibling.textContent="manditory"
    } 
    if(checkout.value===""){
        let nman = name.nextSibling.textContent="manditory"
    } 

    else{

        let tbody= document.getElementById("tbody")

    let trow = document.createElement("tr")
    tbody.appendChild(trow)
    let tdata1 = document.createElement("td")
    trow.appendChild(tdata1)
    tdata1.textContent=i++
    let tdata2 = document.createElement("td")
    trow.appendChild(tdata2)
    tdata2.textContent=name.value
    let tdata3 = document.createElement("td")
    trow.appendChild(tdata3)
    tdata3.textContent=bikeno.value
    let tdata4 = document.createElement("td")
    trow.appendChild(tdata4)
    tdata4.textContent=contact.value
    let tdata5 = document.createElement("td")
    trow.appendChild(tdata5)
    tdata5.textContent=checkin.value
    let tdata6 = document.createElement("td")
    trow.appendChild(tdata6)
    tdata6.textContent=checkout.value


    tdata1.style.border="1px solid black"
    tdata2.style.border="1px solid black"
    tdata3.style.border="1px solid black"
    tdata4.style.border="1px solid black"
    tdata5.style.border="1px solid black"
    tdata6.style.border="1px solid black"

    document.getElementById("name").value=""
    document.getElementById("bikeno").value=""
    document.getElementById("contact").value=""
    document.getElementById("checkin").value=""
    document.getElementById("checkout").value=""


    }
   
     
    
})
