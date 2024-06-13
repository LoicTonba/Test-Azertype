
/********** CREATION DE NOTRE PROPRE GESTION D'ERREUR AVEC THROW */
// function verifierNom(chaine) {
//    if(chaine.length < 2) {
//       throw new Error(`La chaine ${chaine} est trop petite`)
//    }
// }

// try {
//    verifierNom("Loic")
//    verifierNom("L")
// } catch (erreur) {
//    console.log(erreur)
// }

/********** GESTION  DES ERREURS AVEC try/catch DANS UN FORMULAIRE */
// let form = document.querySelector("form")

// form.addEventListener("submit", (event) => {
//    try {
//       event.preventDefault()

//       let baliseNom = document.getElementById("nom")
//       verifierChamp(baliseNom)
      
//       let balisePrenom = document.getElementById("prenom")
//       verifierChamp(balisePrenom)
      
//       let baliseSurnom = document.getElementById("surnom")
//       verifierChamp(baliseSurnom)

//       // traitement du formulaire
//       // ...
//    } catch (error) {
//       console.log("Une erreur est survenue : "+ error.message)
//    }
// })


/********** GESTION  DES ERREURS AVEC try/catch */
// try {
//    let maVariable = document.getElementById("idInexistant")
//    maVariable.createElement("div")
//    // suite du traitement
// }catch {
//    console.log("Il y a eu une erreur dans le bloc try")
// }

// try {
   
//    let idElement = "idInexistant"
//    let monElement = document.getElementById(idElement)
//    monElement.innerHTML = "Bonjour"

//    let idElement2 = "idInexistant"
//    let monElement2 = document.getElementById(idElement2)
//    monElement2.innerHTML = "Bonjour"
// } catch (error) {
//    console.log("Mon élément n'existe pas")
// }


/********** GESTION  DES ERREURS AVEC if/else */

// let maVariable = document.getElementById("idInexistant")


// if (maVariable === null){
//    console.log("L'élément n'existe pas");
// } else {
//    maVariable.createElement("div")
//    // suite du traitement
// }


/********** VERIFIER LES  CHAMPS DU FORMULAIRE */
// let form = document.querySelector("form")
// console.log(form)
// let baliseNom = document.querySelector("nom")
// console.log(nom)
// let baliseEmail = document.querySelector("email")
// console.log(email)

// function verifierChamp(balise) {
//    if(balise.value === "") {
//       balise.classList.add("error")
//    } else {
//       balise.classList.remove("error")
//    }
// }

// function verifierEmail(balise) {
//    let emailRegExp = RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
//    if(emailRegExp.test(balise.value)){
//       return true
//    }
//    return false
// }

// form.addEventListener("submit", (event) => {
//    event.preventDefault()
//    verifierChamp(baliseNom)
// })

// baliseNom.addEventListener("change", () => {
//    verifierChamp(baliseNom)
// })

/********** VERIFIER LE NOM input email */
//[a-z0-9._-]+
/********** VERIFIER L'arobase input email */
//[a-z0-9._-]+@
/********** VERIFIER Le fournisseur input email */
//[a-z0-9._-]+@[a-z0-9._-]+
/********** VERIFIER Le point input email */
//[a-z0-9._-]+@[a-z0-9._-]+\.
/********** VERIFIER L'extension input email */
//[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+

//****************EXPRESSION REGULIERE
// let chaine = "cachalot"; // Testez avec des chiffres pour voir la différence
// let regex = new RegExp("^[a-z]+$");
// let resultat = regex.test(chaine);
// console.log(resultat); // Affiche true.

//********************** VERIFICATION   CHAMP FORMULAIRE
// let form = document.querySelector("form")
// let baliseNom = document.getElementById('nom')

// function verifierChamp(balise){
//    if (balise.value === ""){
//       balise.classList.add("error")
//    } else {
//       balise.classList.remove("error")
//    }
// }

// form.addEventListener("submit", (event) => {
//    event.preventDefault()
//    verifierChamp(baliseNom)
// })

// baliseNom.addEventListener('change', () => {
//    verifierChamp(baliseNom)
// })






// const baliseNom = document.getElementById('nom');
// baliseNom.addEventListener('change', (event) =>{
//    const valeurNom = event.target.value;
//    if (valeurNom === "") {
//       console.log('Le champ nom est vide');
//       alert('Le champ nom est vide');
//    } else {
//       console.log('Le champ nom est rempli');
//    }
// });



// const form = document.querySelector('form');

// //Ajout d'un écouteur d'événement sur le formulaire pour écouter le submit
// form.addEventListener("submit", (event) => {
//    // On empeche le comportement par défaut
//    event.preventDefault();

//    // On fait la vérification.
//    const baliseNom = document.getElementById('nom');
//    const valeurNom = baliseNom.value;
//    if (valeurNom === "") {
//       console.log('Le champ nom est vide');
//       alert('Le champ nom est vide');
//    } else {
//       console.log('Le champ nom est rempli');
//    }
// })



// const form = document.querySelector('form');

// // Quand on submit
// form.addEventListener("submit", (event) => {
//    // On empeche le comportement par defaut
//    event.preventDefault();
//    console.log("Il n'y a pas eu de rechargement de page");

//    // On récupère les deux champs et on affiche leur valeur
//    const nom = document.getElementById("nom").value;
//    const email = document.getElementById("email").value;
//    console.log(nom);
//    console.log(email);

// })




// let nom = document.getElementById("nom")
// console.log(nom.value)

// let conditions = document.getElementById("conditions")
// console.log(conditions.checked)

// let listeBtnRadio = document.querySelectorAll("input[type=radio]")
// for (let i = 0; i < listeBtnRadio.length; i++) {
//     if(listeBtnRadio[i].checked){

//         console.log(listeBtnRadio[i].value)
//     }
// }

// nom.addEventListener("change", () => {
//     console.log(nom.value)
// })


// let baliseCouleur = document.querySelectorAll('input[name="couleur"]')
// let couleur = ""
// for (let i = 0; i < baliseCouleur.length; i++) {
//     if (baliseCouleur[i].checked) {
//         couleur = baliseCouleur[i].value
//         break
//     }
// }

// console.log(couleur)


// let listButtons = document.querySelectorAll("button")

// for (let i = 0; i < listButtons.length; i++) {
//     let boutonActuel = listButtons[i]
//     console.log(boutonActuel)

//     boutonActuel.addEventListener("click", (event) => {
//         monBouton = event.target
//         console.log(`J'ai cliqué sur le bouton : ${monBouton.id}`)
//     })

// }


// let bouton1 = document.getElementById("bouton1")

// bouton1.addEventListener("click", (event) => {
//     console.log(event)
// })


// let titrePage = "Le titre de ma page"

// let h1 = document.createElement("h1")
// h1.innerText = titrePage

// let body = document.querySelector("body")
// // body.appendChild(h1)

// let html = `
//     <header>
//         <h1>${titrePage}</h1>
//     </header>

// `
// body.innerHTML = html

// let monBouton = document.getElementById("monBouton");
// monBouton.addEventListener("click", function () {
//     console.log("Vous avez cliqué sur le bouton")
// })

// let bouton1 = document.getElementById("bouton1")
// bouton1.addEventListener("click", () => {
//     console.log("J'ai cliqué sur le bouton 1")
// })

//  document.addEventListener('keydown', (event) => {
//     console.log(event.key);
// });

