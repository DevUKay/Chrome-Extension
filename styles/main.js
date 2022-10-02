let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById('delete-btn')
const leadsFromLocalStorage = JSON.parse( localStorage.getItem(myLeads) )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

tabBtn.addEventListener(click, function() {
    // console.log(tabs[0].url)
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})

function render(leads) {
    
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener( "dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)

    // console.log( localStorage.getItem("myLeads"))
})




//////////////////////// 
// Below here!| praticing rendering HTML code through JS

// let buyBtn = document.getElementById('container')

// buyBtn.innerHTML += "<button onclick='buy()'> Buy! </button>"
// function buy() {
//     buyBtn.innerHTML += "<p> Thank you for Buying! </p>"
// }

/////////////////////////////////////////
// template literal or strings

// const recipient = "James"
// const sender = "kingsley"

// const email = `
//             Hey ${recipient}!
//             How is it going
//             Cheers ${sender}`

// console.log(email)

/////////////////////

// const welcomeEl = document.getElementById("welcome-el")

// function greet(salute, name, emoji) {
//     welcomeEl.textContent = ` ${salute}, ${name} ${emoji}`
// }

// greet("Whats up", "Kingsley", "👌🏾")

/////////////////////////////////

// function add(v1, v2) {
//     return(v1 + v2)
// }

// console.log( add(3,4) )
// console.log( add(9, 102) )


////////////////////////

// function getFirst(arr) {
//     return arr[1]
// }
// let firstCard = getFirst([1,3,4,5])
// console.log(firstCard)

/////////////////////////////////