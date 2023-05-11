
let initialDepenses = JSON.parse(localStorage.getItem('depenses')) || []

const compteurElement = document.querySelector(".spans_1")
const table = document.querySelector(".table")
const tbodys = document.createElement("tbody")

// Fonction compteur
function setCompteur(spans_1){
    compteurElement.innerHTML = spans_1
}
setCompteur()
let tblRevenu=[100000]
let montantR=tblRevenu
document.getElementById('montant_revenu').innerHTML=tblRevenu.reduce(maFonction)
function maFonction(montantRe, montant_cour){
    for (let tblRevenu = 0; tblRevenu < tblRevenu.length; i++) {
        
        if (montant_revenu) {
            montantR.push(montant_revenu)
        }
        return montantRe + montant_cour
    }
    localStorage.getItem('montant_revenu')
}



// ajouter depuis le localstorage
function setDepenses(depenses){
    localStorage.setItem('depenses', JSON.stringify(depenses))
}

// recuper les information depuis le localstaorage
function getDepeneses(){
    return JSON.parse(localStorage.getItem('depenses'))
}

// Supprimer depuis le LocalStorage
function DeleteDepenses(depenses){
    localStorage.removeItem('depenses', JSON.stringify(depenses))
}
//DeleteDepenses()

setDepenses(initialDepenses)
let depenses = getDepeneses()

// remplissage de la table
function createTable(){
    for (let index = 0; index < depenses.length; index++) {
       let row = document.createElement('tr')
       // creation des boutons
       let buttoncell = document.createElement("td")
       //let buttonModification = document.createElement("button")
       let buttonSuppresion = document.createElement("button")
       let buttonText = document.createTextNode("Modifier")
       let buttonTexte = document.createTextNode("Supprimer")
       //buttonModification.setAttribute("class","mdf_btn")
       buttonSuppresion.setAttribute("class", "sup_btn")
       //buttonModification.appendChild( buttonText)
       buttonSuppresion.appendChild( buttonTexte)

        for (let element = 0; element < Object.keys(depenses[0]); element++) {

            // Ajout des td
            const cell = document.createElement('td')
            const cellText = document.createTextNode(
                Object.values(depenses [index])[element]
            )
            buttonSuppresion.setAttribute("titreDepenses", depenses[index].titre)
            //buttoncell.appendChild(buttonModification)
            buttoncell.appendChild(buttonSuppresion)
            cell.appendChild(cellText)
            row.appendChild(cell)
            row.appendChild(buttoncell)
            row.setAttribute("id", depenses[index].titre)
        }
       
       tbodys.appendChild(row)
    }
    table.appendChild(tbodys)
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
       setCompteur(depenses.removeChild) 
       setDepenses(depenses)
       DeleteDepenses(depenses.removeChild(row))
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
    // localstorage
    setDepenses(depenses)


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
    
    // creation des boutons du nouveau element ajoute
    let buttoncell = document.createElement("td")
    //let buttonModification = document.createElement("button")
    let buttonSuppresion = document.createElement("button")
    let buttonText = document.createTextNode("Modifier")
    let buttonTexte = document.createTextNode("Supprimer")
    //buttonModification.setAttribute("class","mdf_btn")
    buttonSuppresion.setAttribute("class", "sup_btn")
    buttonSuppresion.setAttribute("titreDepenses", montant)
    //buttonModification.appendChild( buttonText)
    buttonSuppresion.appendChild( buttonTexte)


    
    // on affiche les buttons du nouveau element ajoute
    //buttoncell.appendChild(buttonModification)
    buttoncell.appendChild(buttonSuppresion)
    // on affiche les texts des buttons
    //buttonModification.appendChild( buttonText)
    buttonSuppresion.appendChild( buttonTexte)

   /* // ajouter un evement + button suppressions
    buttonModification.addEventListener('click',function(){
        const titre = this.getAttribute("titreDepenses")
         
       let row = document.getElementById(montant)
       row.parentNode.removeChild(row)

       // Enlever l'element supprimer
       let filtreTitre = depenses.filter((titres) => titres.titre !== titre)
       depenses = filtreTitre
       setCompteur(depenses.length) 
       setDepenses(depenses)
    })

    buttoncell.appendChild(buttonModification)*/

    // ajouter un evement + button suppression
    buttonSuppresion.addEventListener('click',function(){
        const titre = this.getAttribute("titreDepenses")
         
       let row = document.getElementById(titre)
       row.parentNode.removeChild(row)

       // Enlever l'element supprimer
       let filtreTitre = depenses.filter((titres) => titres.titre !== titre)
       depenses = filtreTitre
       setCompteur(depenses.length)
       setDepenses(depenses)
       DeleteDepenses(row)
    })

    buttoncell.appendChild(buttonSuppresion)

    row.appendChild(buttoncell) // on recupere la ligne et le colonne du bouton apres ajout d'un nouvel element

    row.setAttribute("id", titre)
    row.setAttribute("id", montant)
    tbodys.appendChild(row)
    table.appendChild(tbodys)
    document.body.appendChild(table)

    //Vider les inputs apres ajout d'un nouvel element 
    document.getElementById("titre").value = ''
    document.getElementById("montant").value = ''
    modal.style.display="none"// masquer le modal apres ajout
}

setCompteur(depenses.length)

