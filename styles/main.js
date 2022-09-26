let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    // console.log(myLeads)
    renderLeads()
})




function renderLeads() {
    
    let listItems = " "
    for (i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>"
        console.log(listItems)
    }
    
    ulEl.innerHTML = listItems

}


//////////////////////// Below here!| praticing rendering HTML code through JS

// let buyBtn = document.getElementById('container')

// buyBtn.innerHTML += "<button onclick='buy()'> Buy! </button>"
// function buy() {
//     buyBtn.innerHTML += "<p> Thank you for Buying! </p>"
// }
