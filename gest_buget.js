let depenses =[
    {"titre": "Nourriture", "montant": "20000"},
    {"titre": "Cafe", "montant":"100"},
   
]

const compteurElement = document.querySelector(".compteur")
const table = document.querySelector(".table")
const tbody = document.createElement("tbody")

// Fonction compteur
function setCompteur(compteur){
    compteurElement.innerHTML = compteur
}

// remplissage de table
function createTable(){
    for (let index = 0; index < 2; index++) {
       let row = document.createElement('tr')
       // creation des boutons
       let buttoncell = document.createElement("td")
       let buttonModification = document.createElement("button")
       let buttonSuppresion = document.createElement("button")
       let buttonText = document.createTextNode("Modifier")
       let buttonTexte = document.createTextNode("Supprimer")
       buttonModification.setAttribute("class","mdf_btn")
       buttonSuppresion.setAttribute("class", "sup_btn")
       buttonModification.appendChild( buttonText)
       buttonSuppresion.appendChild( buttonTexte)

        for (let element = 0; element < depenses.length; element++) {

            // Ajout des td
            const cell = document.createElement('td')
            const cellText = document.createTextNode(
                Object.values(depenses [index])[element]
            )
            buttonSuppresion.setAttribute("titreDepenses", depenses[index].titre)
            buttoncell.appendChild(buttonModification)
            buttoncell.appendChild(buttonSuppresion)
            cell.appendChild(cellText)
            row.appendChild(cell)
            row.appendChild(buttoncell)
            row.setAttribute("id", depenses[index].titre)
        }
       
       tbody.appendChild(row)
    }
    table.appendChild(tbody)
    document.body.appendChild(table)
}

createTable()
let buttonSuppresion = document.querySelectorAll(".sup_btn")
buttonSuppresion.forEach(function(button){
    button.addEventListener('click', function(){
       const titre = this.getAttribute("titreDepenses")
       
       let row =document.getElementById(titre)
       row.parentNode.removeChild(row)

       // Enlever l'element supprimer
       let filtreTitre = depenses.filter((titres) => titres.titre !== titre)
       depenses = filtreTitre
       setCompteur(depenses.length) 
    })
})

/*
  let buttonModification = document.querySelectorAll(".mdf_btn")
    buttonModification.forEach(function(button){
    button.addEventListener('click', function(){
       const montant = this.getAttribute("montantDepense")
       
       let row =document.getElementById(montant)
       row.parentNode.removeChild(row)

       // Enlever l'element supprimer
       let filtreMontant = depenses.filter((montants) => montants.montant !== montant)
       depenses = filtreMontant
       setCompteur(depenses.length) 
    })
})

*/
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
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display="none"
    }
}

// Ajouter une depense

let vld_btn = document.querySelector('.vld_btn')
vld_btn.onclick = function(event){
    event.preventDefault()
    const titre = document.getElementById("titre").value
    const montant = document.getElementById("montant").value
    if(!titre || !montant){
        alert("Merci de bien vouloir tout remplir !")
    return
    }
    const newDepense = {titre, montant}
    depenses.push(newDepense)
    setCompteur(depenses.length)

    // Ajouter un tr
    let row = document.createElement("tr")
    let cell0 = row.insertCell(0)
    let cell1 = row.insertCell(1)
    const cell0Text = document.createTextNode(titre)
    const cell1Text = document.createTextNode(montant)
    cell0.appendChild(cell0Text)
    cell1.appendChild(cell1Text)
    row.appendChild(cell0)
    row.appendChild(cell1)
    
    // creation des boutons
    let buttoncell = document.createElement("td")
    let buttonModification = document.createElement("button")
    let buttonSuppresion = document.createElement("button")
    let buttonText = document.createTextNode("Modifier")
    let buttonTexte = document.createTextNode("Supprimer")
    buttonModification.setAttribute("class","mdf_btn")
    buttonSuppresion.setAttribute("class", "sup_btn")
    
    buttoncell.appendChild(buttonModification)

    console.log('passer')
    // reaction boutton
    buttonSuppresion.setAttribute("id", titre)
    buttoncell.appendChild(buttonSuppresion)

    // Ajouter un evenement 
    buttonSuppresion.addEventListener('click',function(){
        const titre = this.getAttribute("id")
       
       let row =document.getElementById(id)
       
       row.parentNode.removeChild(row)

       // Enlever l'element supprimer
       let filtreTitre = depenses.filter((titres) => titres.titre !== titre)
       depenses = filtreTitre
       setCompteur(depenses.length) 
    })

    buttonModification.appendChild( buttonText)
    buttonSuppresion.appendChild( buttonTexte)

    row.appendChild(buttoncell)

    row.setAttribute("id", titre)
    row.setAttribute("id", montant)
    tbody.appendChild(row)
    table.appendChild(tbody)
    document.body.appendChild(table)

    //Vider les inputs
    document.getElementById("titre").value = ''
    document.getElementById("montant").value = ''
    modal.style.display="none"
}

setCompteur(depenses.length)