export class Commande {
  constructor() {
    this.idC = 0;
    this.DateCommande = new Date();
    this.prixTotale = 0;
  }
  idC: Number;
  DateCommande: Date;
  prixTotale: Number;
}
