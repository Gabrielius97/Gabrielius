function getLanguageTranslations(lang){
    let translations = {
        en: {
            menu: {
                lists: "Lists",
                remote: "Remote page address",
                whoWeAre: "Vilnius Coding: who we are",
                contacts: "Contacts",
                images: "Images",
                formElements: "Form elements",
                boxes: "Boxes",
                layout: "Layout"
            }
        },
        lt:{
            menu: {
                lists: "Sarasai",
                remote: "Nutolusios svetaines sarasas",
                whoWeAre: "kas mes",
                contacts: "kontaktai",
                images: "paveiksliukai",
                formElements: "Formos elementai",
                boxes: "Deuztes",
                layout: "Isdestymas"
            }
            
        }
        
    };

    return translations[lang]; // grazina objekta pagal rakta en arba lt siuo atveju.
}