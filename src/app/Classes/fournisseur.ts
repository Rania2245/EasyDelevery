import { BonLivrason } from './bon-livrason';

export class Fournisseur {
  constructor() {
    this.codeF = 0;
    this.nom = '';
    this.prenom = '';
    this.bonlivraisons = new BonLivrason();
  }
  codeF: Number;
  nom: String;
  prenom: String;
  bonlivraisons: BonLivrason;
}
