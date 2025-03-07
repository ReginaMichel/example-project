import EintragModel from "@/models/eintragModel";

// Beispieleinträge

let id = 0;
let eintraege: EintragModel[] = [
    { id: id++, dienstleister: 'Dr. med. Katharina Hussbarnt', plz: 64283, kategorie: 'Gesundheit', subkategorie: 'Hausarzt', service: 3, leistung: 4, preise: 3, gesamt: 3, datum: new Date("2025-02-14")},
    { id: id++, dienstleister: 'Fancy Haircuts', plz: 64283, kategorie: 'Handwerk', subkategorie: 'Friseur', service: 5, leistung: 5, preise: 5, gesamt: 5, datum: new Date("2025-02-16")},
    { id: id++, dienstleister: 'Sabrinas Bastelladen', plz: 64287, kategorie: 'Einzelhandel', subkategorie: 'Büro & Kreativ', service: 4, leistung: 5, preise: 2, gesamt: 4, datum: new Date("2025-02-16")},
    { id: id++, dienstleister: 'Dacharbeiten Schuberts', plz: 64293, kategorie: 'Handwerk', subkategorie: 'Dacharbeiten', service: 3, leistung: 5, preise: 4, gesamt: 4, datum: new Date("2025-02-17")},
    { id: id++, dienstleister: 'Friedel Sanitär', plz: 64267, kategorie: 'Handwerk', subkategorie: 'Sanitär', service: 2, leistung: 4, preise: 1, gesamt: 2, datum: new Date("2025-02-17")},
    { id: id++, dienstleister: 'Dr. med. Valentin Kabent', plz: 64281, kategorie: 'Gesundheit', subkategorie: 'Orthopädie', service: 3, leistung: 3, preise: 1, gesamt: 2, datum: new Date("2025-02-17")},
    { id: id++, dienstleister: 'Ivonne Seifert', plz: 64289, kategorie: 'Gesundheit', subkategorie: 'Heilpraktiker', service: 4, leistung: 3, preise: 3, gesamt: 3, datum: new Date("2025-02-18")},
    { id: id++, dienstleister: 'Dornröschen', plz: 64287, kategorie: 'Gastronomie', subkategorie: 'Cafe', service: 4, leistung: 5, preise: 1, gesamt: 3, datum: new Date("2025-02-20")},
    { id: id++, dienstleister: 'Ahmeds Supermarkt', plz: 64293, kategorie: 'Einzelhandel', subkategorie: 'Lebensmittel', service: 5, leistung: 4, preise: 5, gesamt: 5, datum: new Date("2025-02-22")},
    { id: id++, dienstleister: 'Highspeed', plz: 64297, kategorie: 'Einzelhandel', subkategorie: 'Fahrradladen', service: 3, leistung: 4, preise: 3, gesamt: 3, datum: new Date("2025-02-23")},
    { id: id++, dienstleister: 'Nadine Nott', plz: 64295, kategorie: 'Handwerk', subkategorie: 'Friseur', service: 4, leistung: 3, preise: 5, gesamt: 4, datum: new Date("2025-02-23")},
    { id: id++, dienstleister: 'Apotheke am See', plz: 64285, kategorie: 'Einzelhandel', subkategorie: 'Apotheke', service: 3, leistung: 4, preise: 1, gesamt: 3, datum: new Date("2025-02-23")},
    { id: id++, dienstleister: 'Fuego', plz: 64335, kategorie: 'Gastronomie', subkategorie: 'Restaurant und Bar', service: 2, leistung: 5, preise: 1, gesamt: 3, datum: new Date("2025-02-24")},
    { id: id++, dienstleister: 'Brillen Wallraff', plz: 64281, kategorie: 'Handwerk', subkategorie: 'Optiker', service: 3, leistung: 4, preise: 3, gesamt: 4, datum: new Date("2025-02-25")},
    { id: id++, dienstleister: 'Venezia', plz: 64267, kategorie: 'Gastronomie', subkategorie: 'Restaurant', service: 2, leistung: 4, preise: 4, gesamt: 3, datum: new Date("2025-02-25")},
    { id: id++, dienstleister: 'Marktapotheke', plz: 64245, kategorie: 'Einzelhandel', subkategorie: 'Apotheke', service: 5, leistung: 4, preise: 3, gesamt: 4, datum: new Date("2025-02-27")},
    { id: id++, dienstleister: 'Dr. Marina Seifert', plz: 64293, kategorie: 'Gesundheit', subkategorie: 'Psychotherapie', service: 3, leistung: 4, preise: 2, gesamt: 3, datum: new Date("2025-03-01")},
    { id: id++, dienstleister: 'Karsten Hahmeier', plz: 64293, kategorie: 'Gesundheit', subkategorie: 'Psychotherapie', service: 3, leistung: 4, preise: 2, gesamt: 5, datum: new Date("2025-03-03")},
    { id: id++, dienstleister: 'Carinas Bar', plz: 64287, kategorie: 'Gastronomie', subkategorie: 'Kneipe', service: 4, leistung: 3, preise: 5, gesamt: 4, datum: new Date("2025-03-03")},
    { id: id++, dienstleister: 'Dr. med. Verena Ulrichs', plz: 64281, kategorie: 'Gesundheit', subkategorie: 'Chirurgie', service: 5, leistung: 5, preise: 4, gesamt: 5, datum: new Date("2025-03-04")},
    { id: id++, dienstleister: 'Dr. med. Jürgen Reicholt', plz: 64283, kategorie: 'Gesundheit', subkategorie: 'Augenarzt', service: 1, leistung: 2, preise: 2, gesamt: 2, datum: new Date("2025-03-04")}
];

export default eintraege;  