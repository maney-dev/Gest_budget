
<<<<<<< HEAD
let initialDepenses = JSON.parse(localStorage.getItem('depenses')) || []


=======
>>>>>>> bebac6dc1d4750f6bef058e781a45e419bd010ee
const compteurElement = document.querySelector(".compteur")
const table = document.querySelector(".table")
const tbody = document.createElement("tbody")

// Fonction compteur
function setCompteur(compteur){
    compteurElement.innerHTML = compteur
}

// ajouter depuis le localstorage
function setDepenses(depenses){
    localStorage.setItem('depenses', JSON.stringify(depenses))
}

// recuper les infoemation depuis le localstaorage
function getDepeneses(){
    return JSON.parse(localStorage.getItem('depenses'))
}

setDepenses(initialDepenses)
let depenses = getDepeneses()

// remplissage de la table
function createTable(){
<<<<<<< HEAD
    for (let index = 0; index < depenses.length; index++) {
=======
    for (let index = 0; index < 2; index++) {
>>>>>>> bebac6dc1d4750f6bef058e781a45e419bd010ee
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
<<<<<<< HEAD

        for (let element = 0; element < Object.keys(depenses[0]); element++) {

=======

        for (let element = 0; element < depenses.length; element++) {

>>>>>>> bebac6dc1d4750f6bef058e781a45e419bd010ee
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
<<<<<<< HEAD
       setDepenses(depenses)
=======
>>>>>>> bebac6dc1d4750f6bef058e781a45e419bd010ee
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
<<<<<<< HEAD
=======

// Ajouter une depense

let vld_btn = document.querySelector('.vld_btn')
vld_btn.onclick = function(event){
    event.preventDefault()
    console.log("cliquer")
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

    // reaction boutton
    buttonSuppresion.setAttribute("titreDepenses", titre)
    buttoncell.appendChild(buttonSuppresion)

    // Ajouter un evenement 
    buttonSuppresion.addEventListener('click',function(){
        const titre = this.getAttribute("titreDepenses")
       
       let row =document.getElementById(titre)
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
>>>>>>> bebac6dc1d4750f6bef058e781a45e419bd010ee

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
    let buttonModification = document.createElement("button")
    let buttonSuppresion = document.createElement("button")
    let buttonText = document.createTextNode("Modifier")
    let buttonTexte = document.createTextNode("Supprimer")
    buttonModification.setAttribute("class","mdf_btn")
    buttonSuppresion.setAttribute("class", "sup_btn")
    buttonSuppresion.setAttribute("titreDepenses", montant)
    buttonModification.appendChild( buttonText)
    buttonSuppresion.appendChild( buttonTexte)


    
    // on affiche les buttons du nouveau element ajoute
    buttoncell.appendChild(buttonModification)
    buttoncell.appendChild(buttonSuppresion)
    // on affiche les texts des buttons
    buttonModification.appendChild( buttonText)
    buttonSuppresion.appendChild( buttonTexte)

    // ajouter un evement + button suppressions
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

    buttoncell.appendChild(buttonModification)

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
    })

    buttoncell.appendChild(buttonSuppresion)

    row.appendChild(buttoncell) // on recupere la ligne et le colonne du bouton apres ajout d'un nouvel element

    row.setAttribute("id", titre)
    row.setAttribute("id", montant)
    tbody.appendChild(row)
    table.appendChild(tbody)
    document.body.appendChild(table)

    //Vider les inputs apres ajout d'un nouvel element 
    document.getElementById("titre").value = ''
    document.getElementById("montant").value = ''
    modal.style.display="none"// masquer le modal apres ajout
}

setCompteur(depenses.length)


// On crée la deuxieme partie


let initialRevenus = JSON.parse(localStorage.getItem('revenus')) || []


const compteurElements = document.querySelector(".compteur")
const tables = document.querySelector(".table")
const tbodys = document.createElement("tbody")

// Fonction compteur
function setCompteur(compteur){
    compteurElement.innerHTML = compteur
}

// ajouter depuis le localstorage
function setRevenus(revenus){
    localStorage.setItem('revenus', JSON.stringify(revenus))
}

// recuper les infoemation depuis le localstaorage
function getRevenus(){
    return JSON.parse(localStorage.getItem('revenus'))
}

setRevenus(initialRevenus)
let revenus = getRevenus()

// remplissage de la table
function createTables(){
    for (let index = 0; index < revenus.length; index++) {
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

        for (let element = 0; element < Object.keys(revenus[0]); element++) {

            // Ajout des td
            const cell = document.createElement('td')
            const cellText = document.createTextNode(
                Object.values(revenus [index])[element]
            )
            buttonSuppresion.setAttribute("titreRevenus", revenus[index].titre)
            buttoncell.appendChild(buttonModification)
            buttoncell.appendChild(buttonSuppresion)
            cell.appendChild(cellText)
            row.appendChild(cell)
            row.appendChild(buttoncell)
            row.setAttribute("id", revenus[index].titre)
        }
       
       tbodys.appendChild(row)
    }
    table.appendChild(tbodys)
    document.body.appendChild(table)
}

createTables()
let buttonSuppresions = document.querySelectorAll(".sup_btn")
buttonSuppresions.forEach(function(button){
    button.addEventListener('click', function(){
       const titre = this.getAttribute("titreRevenus")
       
       let row =document.getElementById(titre)
       row.parentNode.removeChild(row)

       // Enlever l'element supprimer
       let filtreTitre = revenus.filter((titres) => titres.titre !== titre)
       revenus = filtreTitre
       setCompteur(revenus.length) 
       setDepenses(revenus)
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
let modals = document.getElementById('revenu_modals')
let modalsButton = document.getElementById('ajouter_revenu')
let fermers = document.querySelector('.fermers')

modalsButton.onclick = function(){
    modals.style.display="block"
}
fermers.onclick = function(){
    modals.style.display="none"
}
window.onclick = function(event){
    if(event.target == modals){
        modals.style.display="none"
    }
}

// Ajouter une depense

let vld_btns = document.querySelector('.vld_btns')
vld_btns.onclick = function(event){
    event.preventDefault()
    const titre = document.getElementById("titreRevenu").value
    const montant = document.getElementById("montantRevenu").value
    if(!titre || !montant){
        alert("Merci de bien vouloir tout remplir !")
    return
    }
    const newRevenu = {titre, montant}
    revenus.push(newRevenu)
    setCompteur(revenus.length)
    // localstorage
    setRevenus(revenus)

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
    let buttonModification = document.createElement("button")
    let buttonSuppresions = document.createElement("button")
    let buttonText = document.createTextNode("Modifier")
    let buttonTexte = document.createTextNode("Supprimer")
    buttonModification.setAttribute("class","mdf_btn")
    buttonSuppresions.setAttribute("class", "sup_btn")
    buttonSuppresions.setAttribute("titreDepenses", montant)
    buttonModification.appendChild( buttonText)
    buttonSuppresions.appendChild( buttonTexte)


    
    // on affiche les buttons du nouveau element ajoute
    buttoncell.appendChild(buttonModification)
    buttoncell.appendChild(buttonSuppresions)
    // on affiche les texts des buttons
    buttonModification.appendChild( buttonText)
    buttonSuppresions.appendChild( buttonTexte)

    // ajouter un evement + button Modification
    buttonModification.addEventListener('click',function(){
        const titre = this.getAttribute("titreRevenus")
         
       let row = document.getElementById(montant)
       row.parentNode.removeChild(row)

       // Enlever l'element supprimer
       let filtreTitre = revenus.filter((titres) => titres.titre !== titre)
       depenses = filtreTitre
       setCompteur(revenus.length) 
       setDepenses(revenus)
    })

    buttoncell.appendChild(buttonModification)

    // ajouter un evement + button suppression
    buttonSuppresions.addEventListener('click',function(){
        const titre = this.getAttribute("titreRevenus")
         
       let row = document.getElementById(montant)
       row.parentNode.removeChild(row)

       // Enlever l'element supprimer
       let filtreTitre = revenus.filter((titres) => titres.titre !== titre)
       depenses = filtreTitre
       setCompteur(revenus.length) 
       setDepenses(revenus)
    })

    buttoncell.appendChild(buttonSuppresions)

    row.appendChild(buttoncell) // on recupere la ligne et le colonne du bouton apres ajout d'un nouvel element

    row.setAttribute("id", titre)
    row.setAttribute("id", montant)
    tbody.appendChild(row)
    table.appendChild(tbody)
    document.body.appendChild(table)

    //Vider les inputs apres ajout d'un nouvel element 
    document.getElementById("titreRevenu").value = ''
    document.getElementById("montantRevenu").value = ''
    modals.style.display="none"// masquer le modal apres ajout
}

setCompteur(revenus.length)