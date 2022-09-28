let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById('delete-btn')
const leadsFromLocalStorage = JSON.parse( localStorage.getItem(myLeads) )

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

deleteBtn.addEventListener( "dblclick", function(){
    console.log('double Clicked!')
    localStorage.clear()
    myLeads = []
    renderLeads()
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads()

    console.log( localStorage.getItem("myLeads"))
})




function renderLeads() {
    
    let listItems = ""
    for (i = 0; i < myLeads.length; i++) {
        // listItems += "<li> <a target='_blank' href= " +  myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
        // console.log(listItems)
    }
    
    ulEl.innerHTML = listItems

}


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