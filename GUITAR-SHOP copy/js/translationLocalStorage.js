
let localStorage = window.localStorage;

let lang = localStorage.getItem("lang");

if (!lang) {

    lang = document.querySelector("#languageChanger").value;
}
else {

    document.querySelector("#languageChanger").value = lang;
}

doTranslation(lang);

document.querySelector("#languageChanger").addEventListener("change", function () {

    doTranslation(this.value);

    localStorage.setItem("lang", this.value);
});
function doTranslation(language) {
    let translation = getLanguageTranslations(language);

    document.querySelector("[translation-menu-index]").innerText = translation.menu.index;
    document.querySelector("[translation-menu-acoustic]").innerText = translation.menu.acoustic;
    document.querySelector("[translation-menu-electric]").innerText = translation.menu.electric;
    document.querySelector("[translation-menu-bass]").innerText = translation.menu.bass;
    document.querySelector("[translation-menu-other]").innerText = translation.menu.other;
    document.querySelector("[translation-menu-contacts]").innerText = translation.menu.contacts;
    document.querySelector("[translation-menu-newItems]").innerText = translation.menu.newItems;
    document.querySelector("[translation-menu-recommended]").innerText = translation.menu.recommended;
    document.querySelector("[translation-menu-contacts2]").innerText = translation.menu.contacts2;
    document.querySelector("[translation-menu-contactsBelow]").innerText = translation.menu.contactsBelow;
    document.querySelector("[translation-menu-email]").innerText = translation.menu.email;
    document.querySelector("[translation-menu-telephone]").innerText = translation.menu.telephone;
    document.querySelector("[translation-menu-buy]").innerText = translation.menu.buy;
    
    
}