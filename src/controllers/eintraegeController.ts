// Import von Beispieleinträgen
import eintraege from "@/assets/eintraege";
// Import des Modells einer Tabellenzeile
import EintragModel from "@/models/eintragModel";
import type EintragModelJSONparse from "@/models/eintragModelJSONparse";

/**
 * Controller zur Verwaltung der Tabelleneinträge. Tabelleneinträge können aus dem LocalStorage geladen werden,
 * alphebetisch oder numerisch sortiert werden, nach Kategorien gefiltert werden. 
 */
class EintraegeController {
    // Arrays für alle bzw. alle eigenen Tabelleneinträge
    private alleEintraege: EintragModel[];
    private eigeneEintraege: EintragModel[];

    // Damit die Sortierung der Tabelle zwischen auf- und absteigender Sortierung wechseln kann, werden boolische
    // Ausdrücke benötigt.
    private toggleSortName: boolean = true;
    private toggleSortPLZ: boolean = true;
    private toggleSortKategorie: boolean = true;
    private toggleSortUnterkategorie: boolean = true;
    private toggleSortService: boolean = true;
    private toggleSortLeistung: boolean = true;
    private toggleSortPreise: boolean = true;
    private toggleSortGesamt: boolean = true;
    private toggleSortDatum: boolean = true;
    
    /**
     * Konstruktor des Controllers der Einträge. Falls im lokalen Speicher bereits ein Array mit Einträgen vorliegt,
     * wird dieses geladen. Liegt keines vor, wird als Default das Array aus eintrage.ts genutzt.
     */
    public constructor() {
        if(localStorage.getItem('alleEintraege')){
            // Da JSON.parse() das Datumsformat fälschlicherweise als string interpretiert ist zusätzlich die Methode
            // this.dateStringToDate nötig. 
            this.alleEintraege = this.dateStringToDate(JSON.parse(localStorage.getItem('alleEintraege')));
        } else { 
            this.alleEintraege = eintraege;
        }
        if(localStorage.getItem('eigeneEintraege')){
            this.eigeneEintraege = this.dateStringToDate(JSON.parse(localStorage.getItem('eigeneEintraege')));
        } else {
            this.eigeneEintraege = [];
        }
    }

    /**
     * Methode zur Umwandlung des Datumsformats innerhalb der von JSON.parse erzeugten Arrays vom Format "string"
     * zum Format "Date".
     * 
     * @param ein Array, das dem Typ EintragModelJSONparse[] entspricht, was sich vom Array des Formats EintragModel[]
     * lediglich darin unterscheidet, dass das datum als string statt als Date gespeichert ist. 
     *
     * @returns ein Array der Klasse EintragModel[] mit korrektem Datumsformat.
     */
    private dateStringToDate(array: EintragModelJSONparse[]): EintragModel[] {
        let eintragsArray: EintragModel[] = [];
        // Es werden alle Einträge in das neue Array überführt, wobei der Datumseintrag aus dem string in ein Date
        // überführt wird.
        array.forEach(entry => eintragsArray.push(
            { id: entry.id, dienstleister: entry.dienstleister, plz: entry.plz, kategorie: entry.kategorie,
                subkategorie: entry.subkategorie, service: entry.service, leistung: entry.leistung,
                preise: entry.preise, gesamt: entry.gesamt, datum: new Date(entry.datum) }
        ));
        return eintragsArray;
    }
    
    /**
     * Methode, die ein Array aus allen Einträgen zurückgibt.
     * 
     * @returns alle Einträge
     */
    public getAll(): EintragModel[] {
        return this.alleEintraege;
    }
    /**
     * Methode, die ein Array aus allen eigenen Einträgen zurückgibt.
     * 
     * @returns alle eigenen Einträge
     */
    public getEigene(): EintragModel[] {
        return this.eigeneEintraege;
    }

    // Methoden, die Arrays mit den Einträgen gefiltert nach Kategorien zurückgeben:
    public getGesundheit(): EintragModel[] {
        let gesundheitEintraege: EintragModel[] = this.alleEintraege.filter(eintrag => eintrag.kategorie == "Gesundheit");
        return gesundheitEintraege;
    }
    public getEinzelhandel(): EintragModel[]  {
        let gesundheitEintraege: EintragModel[] = this.alleEintraege.filter(eintrag => eintrag.kategorie == "Einzelhandel");
        return gesundheitEintraege;
    }
    public getGastronomie(): EintragModel[]  {
        let gesundheitEintraege: EintragModel[] = this.alleEintraege.filter(eintrag => eintrag.kategorie == "Gastronomie");
        return gesundheitEintraege;
    }
    public getHandwerk(): EintragModel[]  {
        let gesundheitEintraege: EintragModel[] = this.alleEintraege.filter(eintrag => eintrag.kategorie == "Handwerk");
        return gesundheitEintraege;
    }

    // Methoden, die Arrays nach spezifischen Parametern sortieren:
    public sortByName(tabelle: EintragModel[]) {
        if (this.toggleSortName) {
            tabelle.sort((a,b) => (a.dienstleister > b.dienstleister) ? 1 : ((b.dienstleister > a.dienstleister) ? -1 : 0));
        } else {
            tabelle.sort((a,b) => (a.dienstleister > b.dienstleister) ? -1 : ((b.dienstleister > a.dienstleister) ? 1 : 0));
        }
        this.toggleSortName = !this.toggleSortName;    
    }
    public sortByPLZ(tabelle: EintragModel[]) {
        // Beispiel für eine kompaktere, jedoch unübersichtliche Kurzschreibweise:
        tabelle.sort((a,b) => (((this.toggleSortPLZ ? 1 : -1))*((a.plz > b.plz) ? 1 : ((b.plz > a.plz) ? -1 : 0))));
        this.toggleSortPLZ = !this.toggleSortPLZ
    }
    public sortByKategorie(tabelle: EintragModel[]) {
        if (this.toggleSortKategorie) {
            tabelle.sort((a,b) => (a.kategorie > b.kategorie) ? 1 : ((b.kategorie > a.kategorie) ? -1 : 0));
        } else {
            tabelle.sort((a,b) => (a.kategorie > b.kategorie) ? -1 : ((b.kategorie > a.kategorie) ? 1 : 0));
        }
        this.toggleSortKategorie = !this.toggleSortKategorie;
    }
    public sortByUnterkategorie(tabelle: EintragModel[]) {
        if (this.toggleSortUnterkategorie) {
            tabelle.sort((a,b) => (a.subkategorie > b.subkategorie) ? 1 : ((b.subkategorie > a.subkategorie) ? -1 : 0));
        } else {
            tabelle.sort((a,b) => (a.subkategorie > b.subkategorie) ? -1 : ((b.subkategorie > a.subkategorie) ? 1 : 0));
        }
        this.toggleSortUnterkategorie = !this.toggleSortUnterkategorie;
    }
    public sortByService(tabelle: EintragModel[]) {
        if (this.toggleSortService) {
            tabelle.sort((a,b) => (a.service > b.service) ? -1 : ((b.service > a.service) ? 1 : 0));
        } else {
            tabelle.sort((a,b) => (a.service > b.service) ? 1 : ((b.service > a.service) ? -1 : 0));
        }
        this.toggleSortService = !this.toggleSortService;
    }
    public sortByLeistung(tabelle: EintragModel[]) {
        if (this.toggleSortLeistung) {
            tabelle.sort((a,b) => (a.leistung > b.leistung) ? -1 : ((b.leistung > a.leistung) ? 1 : 0));
        } else {
            tabelle.sort((a,b) => (a.leistung > b.leistung) ? 1 : ((b.leistung > a.leistung) ? -1 : 0));
        }
        this.toggleSortLeistung = !this.toggleSortLeistung;
    }
    public sortByPreise(tabelle: EintragModel[]) {
        if (this.toggleSortPreise) {
            tabelle.sort((a,b) => (a.preise > b.preise) ? -1 : ((b.preise > a.preise) ? 1 : 0));
        } else {
            tabelle.sort((a,b) => (a.preise > b.preise) ? 1 : ((b.preise > a.preise) ? -1 : 0));
        }
        this.toggleSortPreise = !this.toggleSortPreise;
    }
    public sortByGesamt(tabelle: EintragModel[]) {
        if (this.toggleSortGesamt) {
            tabelle.sort((a,b) => (a.gesamt > b.gesamt) ? -1 : ((b.gesamt > a.gesamt) ? 1 : 0));
        } else {
            tabelle.sort((a,b) => (a.gesamt > b.gesamt) ? 1 : ((b.gesamt > a.gesamt) ? -1 : 0));
        }
        this.toggleSortGesamt = !this.toggleSortGesamt;
    }
    public sortByDate(tabelle: EintragModel[]) {
        if (this.toggleSortDatum) {
            tabelle.sort((a,b) => (a.datum > b.datum) ? -1 : ((b.datum > a.datum) ? 1 : 0));
        } else {
            tabelle.sort((a,b) => (a.datum > b.datum) ? 1 : ((b.datum > a.datum) ? -1 : 0));
        }
        this.toggleSortDatum = !this.toggleSortDatum;
    }
}

export default EintraegeController;  