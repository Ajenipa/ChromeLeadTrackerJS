let myLeads = []
const inputEl = document.getElementById('input-el')
const saveBtn = document.getElementById('save-btn')
const saveTab = document.getElementById('save-tab')
const delBtn = document.getElementById('del-btn')
const ulEl = document.getElementById('ul-el')
let leadsFromlocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromlocalStorage){
    myLeads = leadsFromlocalStorage
    renderLeads(myLeads)
}
saveBtn.addEventListener('click', function(){
     myLeads.push(inputEl.value)  
     inputEl.value= ""
     localStorage.setItem("myLeads", JSON.stringify(myLeads))
     renderLeads(myLeads)
     
})
delBtn.addEventListener("click", ()=>{
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})
saveTab.addEventListener("click", ()=>{
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads)) 
        renderLeads(myLeads)
         })  
})
function renderLeads(leads){
    let listItems = ""

    for(let i=0; i<leads.length; i++){
        //console.log(myLeads[i])
        //listItems += `<li>${myLeads[i]}</li>`
        listItems += `<li><a href="${leads[i]}" target=_blank>${leads[i]}</a></li>
        `
    }

    ulEl.innerHTML = listItems
   
}
