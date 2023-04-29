let initialRevenus = JSON.parse(localStorage.getItem('revenus')) || []
// Un tableau de revenu
/*
let revenus = [
    {titre:"cafe", montant:"100"},
    {titre:"mague", montant:"200"},
   
]*/

const countElement = document.querySelector('.spans_2')
const tables = document.querySelector('.tables')
const tblBody = document.createElement('tbody')

//function setCount

    function setCount(spans_2){
    countElement.innerHTML = spans_2
}
setCount()


// ajouter depuis le localstorage
function setRevenus(revenus){
    localStorage.setItem('revenus', JSON.stringify(revenus))
}

// recuper les informations depuis le localstaorage
function getRevenus(){
    return JSON.parse(localStorage.getItem('revenus'))
}

setRevenus(initialRevenus)
let revenus = getRevenus()

// remplir la table
function createTables (){
    for (let point = 0; point < revenus.length; point++) {
        let tr = document.createElement("tr")
        // creation des buttons
        let buttonCol = document.createElement("td")
        let modifyButton = document.createElement("button")
        let buttontext = document.createTextNode("Modifier")
        modifyButton.appendChild(buttontext)
        modifyButton.setAttribute('class','modify-btn')
        let deleteButton = document.createElement("button")
        let buttontexts = document.createTextNode("Supprimer")
        deleteButton.setAttribute('class', 'delet-btn')
        deleteButton.appendChild(buttontexts)

        for (let elements = 0; elements <Object.keys(revenus[0]); elements++) {
            // ajouter les td
            const col = document.createElement("td")
            const colText = document.createTextNode(
                Object.values(revenus[point])[elements]
            )

            deleteButton.setAttribute("titreRevenus", revenus[point].titre)
            buttonCol.appendChild(modifyButton)
            buttonCol.appendChild(deleteButton)
            col.appendChild(colText)
            tr.appendChild(col)
            tr.appendChild(buttonCol)
            tr.setAttribute("id",revenus[point].titre)
        }
        tblBody.appendChild(tr)
    }
    tables.appendChild(tblBody)

    document.body.appendChild(tables)
}
createTables()
let deleteButton = document.querySelectorAll(".delet-btn")
deleteButton.forEach(function(button){
    button.addEventListener('click', function(){
        const titre = this.getAttribute("titreRevenus")
        let tr = document.getElementById(titre)
        tr.parentNode.removeChild(tr)

        // enlever l'lelemet supprimer
        let filtreTitre = revenus.filter((titres) => titres.titre !== titre)
        revenus = filtreTitre
       setCount(revenus.length)
       setRevenus(revenus)
        
    })
})


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

window.onclick = function(event){
    if(event.target == modol){
        modol.style.display="none"
    }
}

let addRevenuButton = document.querySelector('.addRevenuButton')
addRevenuButton.onclick = function(event){
    event.preventDefault()
    const titre = document.getElementById("titre").value
    const montant = document.getElementById("montant").value
    if(!titre || !montant){
        alert("Merci de bien vouloir tout remplir !")
    return
    }
    const newRevenu = {titre, montant}
    revenus.push(newRevenu)
    setCount(revenus.length)
    // localstorage
    setRevenus(revenus)

    // Ajouter un tr
    let tr = document.createElement("tr")
    let col0 = tr.insertCol(0)
    let col1 = tr.insertCol(1)
    const col0Text = document.createTextNode(titre)
    const col1Text = document.createTextNode(montant)
    col0.appendChild(col0Text)
    col1.appendChild(col1Text)
    tr.appendChild(col0)
    tr.appendChild(col1)

    // creation des boutons du nouveau element ajoute
    let buttoncol = document.createElement("td")
    let modifyButton = document.createElement("button")
    let buttonDelete = document.createElement("button")
    let buttontext = document.createTextNode("Modifier")
    let buttontexts = document.createTextNode("Supprimer")
    modifyButton.setAttribute("class","modify-btn")
    buttonDelete.setAttribute("class", "modify-btn")
    modifyButton.setAttribute("titreRevenus", montant)
    buttonModification.appendChild( buttontext)
    buttonDelete.appendChild( buttontexts)

    // on affiche les buttons du nouveau element ajoute
    buttoncol.appendChild(modifyButton)
    buttoncol.appendChild(buttonDelete)
    // on affiche les texts des buttons
    modifyButton.appendChild( buttontext)
    buttonDelete.appendChild( buttontexts)

    // ajouter un evement + button suppressions
    modifyButton.addEventListener('click',function(){
        const titre = this.getAttribute("titreRevenus")
         
       let tr = document.getElementById(montant)
       tr.parentNode.removeChild(tr)

       // Enlever l'element supprimer
       let filtreTitre = revenus.filter((titres) => titres.titre !== titre)
       revenus = filtreTitre
       //setCount(revenus.length) 
       setRevenus(revenus)
    })

    buttoncol.appendChild(modifyButton)

    // ajouter un evement + button suppression
    buttonDelete.addEventListener('click',function(){
        const titre = this.getAttribute("titreRevenus")
         
       let tr = document.getElementById(titre)
       tr.parentNode.removeChild(tr)

       // Enlever l'element supprimer
       let filtreTitre = revenus.filter((titres) => titres.titre !== titre)
       depenses = filtreTitre
       setCount(revenus.length) 
       setRevenus(revenus)
    })

    buttoncol.appendChild(buttonDelete)

    tr.appendChild(buttoncol) //on recupere la ligne et le colonne du bouton apres ajout d'un nouvel element

    tr.setAttribute("id", titre)
    tr.setAttribute("id", montant)
    tblBody.appendChild(tr)
    tables.appendChild(tblBody)
    document.body.appendChild(tables)

    //Vider les inputs apres ajout d'un nouvel element 
    document.getElementById("titre").value = ''
    document.getElementById("montant").value = ''
    modal.style.display="none"// masquer le modal apres ajout
}

setCount(revenus.length)