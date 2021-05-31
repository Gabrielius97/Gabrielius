function getLanguageTranslations(lang){
    let translations = {
        en: {
            menu: {
                lists: "Lists",
                remote: "Remote page address",
                whoWeAre: "Vilnius coding: who we are",
                contacts: "Contacts",
                images: "Images",
                formElements: "Form elements",
                boxes: "Boxes",
                layout: "Layout"
            }
        },
        lt: {
            menu: {
                lists: "Sąrašai",
                remote: "Nutolusios svetainės adresas",
                whoWeAre: "Vilnius coding: kas mes",
                contacts: "Kontaktai",
                images: "Paveiksliukai",
                formElements: "Formos elementai",
                boxes: "Dėžutės",
                layout: "Išdėstymas"
            }
        }
    };

    return translations[lang]; // grazina objekta pagal rakta en arba lt siuo atveju
}