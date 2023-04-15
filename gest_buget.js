let depenses =[
    {"titre": "Nourriture", "montant": "20000"},
    {"titre": "Cafe", "montant":"100"},
   
]

const compteurElement = document.querySelector("compteur")
const table = document.querySelector(".table")
const tbody = document.createElement("tbody")

// Fonction compteur
function setCompteur(compteur){
    compteurElement.innerHTML = compteur
}

// remplissage de table
function createTable(){
    for (let index = 0; index < 2; index++) {
        let row = document.createElement("tr")

        //creation de bouton de supprission
        let buttonCell = document.createElement("td")
        let buttonSup = document.createElement("button")
        let buttonText = document.createTextNode('Supprimer')
        buttonSup.setAttribute("class", "btn_sup")
        buttonSup.appendChild(buttonText)

        for (let element = 0; element < depenses.length; element++) {
            //ajout des td
            const cell = document.createElement("td")
            const cellTexte = document.createTextNode(
                Object.values(depenses[index])[element]
            )
            buttonSup.setAttribute('motants', depenses[index].montant)
            buttonCell.appendChild(buttonSup)
            cell.appendChild(cellTexte)
            row.appendChild(cell)   
            row.appendChild(buttonCell)
            row.setAttribute('titre',depenses[index].montant)
        }
        tbody.appendChild(row)
    }
    table.appendChild(tbody)

    document.body.appendChild(table)
}
// Appel de la fonction createTable
createTable()

let buttonSup = document.querySelectorAll('.btn_sup')

buttonSup.forEach(function(button){
    button.addEventListener('click', function(){
        const montant = this.getAtribute(montants)

        let row = document.getElementById(montant)
        row.parentNode.removeChild(row)
    })

})

// Le Modal
let modal = document.getElementById('depense_modal')
let modalButton = document.getElementById('ajouter_depense')
let fermer = document.querySelector('.fermer')

modalButton.onclick = function(){
    modal.style.display="block"
}
fermer.onclick = function(){
    modal.style.display="none"
}

setCompteur(depenses.length)