// Un tableau de revenu
let revenus = [
    {titre:"cafe", montant:"100"},
    {titre:"mague", montant:"200"},
   
]

const countElement = document.querySelector('.apanss')
const tables = document.querySelector('.tables')
const tblBody = document.createElement('tbody')

//function compteur
/* 
    function setCount(spans){
    compteurElement.innerHTML = spans
}
setCount()
*/

// remplir la table
function createTables (){
    for (let point = 0; point < 2; point++) {
        let tr = document.createElement("tr")
        // creation des buttons
        let buttonCol = document.createElement("td")
        let modifyButton = document.createElement("button")
        let buttontexte = createTextNode("Modifier")
        let deleteButton = document.createElement("button")
        let buttontext = createTextNode("Supprimer")
        for (let elements = 0; elements < revenus.length; elements++) {
            // ajouter les td
            const col = document.createElement("td")
            const colText = document.createTextNode(Object.values(revenus[point])[elements])
            col.appendChild(colText)
            tr.appendChild(col)
        }
        tblBody.appendChild(tr)
    }
    tables.appendChild(tblBody)

    document.body.appendChild(tables)
}
createTables()
// Le modal
let modol = document.getElementById("revenuModal")
let modolButton = document.getElementById("addRevenuModalButton")
let close = document.querySelector(".close")

modolButton.onclick = function(){
    modol.style.display = 'block'
}

close.onclick = function(){
    modol.style.display = 'none'
}

//setCount(0)