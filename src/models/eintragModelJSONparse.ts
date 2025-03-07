/**
 * Klasse zur Modellierung der Einträge einer Tabellenzeile, wie sie von der Methode JSON.parse()
 * interpretiert wird. Im Vergleich zur Klasse EintragModel ist das Datum ein string.
 */
class EintragModelJSONparse {
    public id: number;
    public dienstleister: string;
    public plz: number;
    public kategorie: string;
    public subkategorie: string;
    public service: number;
    public leistung: number;
    public preise: number;
    public gesamt: number;
    public datum: string; 

    public constructor() {
        this.id = -1;
        this.dienstleister = '';
        this.plz = -1;
        this.kategorie = '';
        this.subkategorie = '';
        this.service = -1;
        this.leistung = -1;
        this.preise = -1;
        this.gesamt = -1;
        this.datum = ''; 
    }
}

export default EintragModelJSONparse;  