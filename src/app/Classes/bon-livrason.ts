import { Client } from './client';
import { Fournisseur } from './fournisseur';
import { Livreur } from './livreur';

export class BonLivrason {
  constructor() {
    this.code = 0;
    this.date = '';
    this.etat = true;
    this.livreur = new Livreur();
    this.fournisseur = new Fournisseur();
    this.bonlivclient = new Client();
  }
  code: Number;
  date: String;
  etat: boolean;
  livreur: Livreur;
  fournisseur: Fournisseur;
  bonlivclient: Client;
}
