import { BonLivrason } from './bon-livrason';

export class Livreur {
  constructor() {
    this.matricule = 0;
    this.nom = '';
    this.prenom = '';
    this.NumVoiture = '';
    this.isAvailable = true;
    this.bonlivraisons = new BonLivrason();
  }
  matricule: Number;
  nom: String;
  prenom: String;
  NumVoiture: String;
  isAvailable: Boolean;
  bonlivraisons: BonLivrason;
}
