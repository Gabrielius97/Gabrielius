function getLanguageTranslations(lang){
    let translations = {
        en: {
            menu: {
                index: "PRINCIPAL PAGE",
                acoustic: "ACOUSTIC GUITARS",
                electric: "ELECTRIC GUITARS",
                bass: "BASS GUITARS",
                other: "ACCESSORIES",
                contacts: "CONTACTS",
                newItems: "NEW ITEMS",
                recommended: "Reccomended:",
                contacts2: "Contacts",
                contactsBelow: "Please contact according to information below: ",
                contacts2: "Contacts",
                contactsBelow: "Please contact according to information below",
                email: "Email: ",
                telephone: "Telephone: ",
                buy: "Buy"

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
                email: "Elektroninis paštas: ",
                telephone: "Telefonas",
                buy: "Pirkti"
            }
        },

        es: {
            menu: {
                index: "INICIO",
                acoustic: "GUITARRAS ACUSTICAS",
                electric: "GUITARRAS ELECTRICAS",
                bass: "GUITARRAS BAJAS",
                other: "ACCESORIOS DE EQUIPO",
                contacts: "CONTACTOS",
                newItems: "Las guitarras nuevas",
                recommended: "Recomendaciones: ",
                contacts2: "Contactos",
                contactsBelow: "Contáctenos para obtener la información a continuación: ",
                email: "Correo electronico: ",
                telephone: "Telefono: ",
                buy: "Comprar"
            }
        }
    };

    return translations[lang];
}