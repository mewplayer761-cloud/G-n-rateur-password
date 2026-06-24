function genererMotDePasse() {
    const longueur = 12;

    const maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const min = "abcdefghijklmnopqrstuvwxyz";
    const chiffres = "0123456789";
    const symboles = ".!@#$%^&*";

    let mdp = "";

    // garantir au moins un de chaque
    mdp += maj[Math.floor(Math.random() * maj.length)];
    mdp += min[Math.floor(Math.random() * min.length)];
    mdp += chiffres[Math.floor(Math.random() * chiffres.length)];
    mdp += symboles[Math.floor(Math.random() * symboles.length)];

    const tout = maj + min + chiffres + symboles;

    while (mdp.length < longueur) {
        mdp += tout[Math.floor(Math.random() * tout.length)];
    }

    // mélanger le mot de passe
    mdp = mdp.split('').sort(() => Math.random() - 0.5).join('');

    document.getElementById("resultat").innerText = mdp;
}
