function getLanguageTranslations(lang){
    let translations = {
        en: {
            menu: {
                index: "PRINCIPAL PAGE",
                acoustic: "ACOUSTIC GUITARS",
                electric: "ELECTRIC GUITARS",
                bass: "BASS GUITARS",
                other: "OTHER",
                contacts: "CONTACTS",
                newItems: "NEW ITEMS",
                recommended: "Reccomended:",
                contacts2: "Contacts",
                contactsBelow: "Please contact according to information below: ",
                contacts2: "Contacts",
                contactsBelow: "Please contact according to information below",
                shoppingCart: "SHOPPING CART"
            }
        },
        lt: {
            menu: {
                index: "PAGRINDINIS",
                acoustic: "AKUSTINĖS GITAROS",
                electric: "ELEKTRINĖS GITAROS",
                bass: "BOSINĖS GITAROS",
                other: "PRIEDAI",
                contacts: "KONTAKTAI",
                newItems: "NAUJOS PREKĖS",
                recommended: "Rekomenduojamos prekės: ",
                contacts2: "Kontaktai",
                contactsBelow: "Susisiekite pagal žemiau pateiktus kontakus: ",
                shoppingCart: "PIRKINIŲ KREPŠELIS"
            }
        }
    };

    return translations[lang];
}