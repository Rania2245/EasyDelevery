import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './Entities/home/home.component';
import { LogInComponent } from './Entities/log-in/log-in.component';
import { FooterComponent } from './Entities/footer/footer.component';
import { HomeClientComponent } from './Entities/Client/home-client/home-client.component';
import { LivraisonComponent } from './Entities/Client/livraison/livraison.component';
import { HomeAdminComponent } from './Entities/Admin/home-admin/home-admin.component';
import { NavbarAdminComponent } from './Entities/Admin/navbar-admin/navbar-admin.component';
import { GestionLivreursComponent } from './Entities/Admin/gestion-livreurs/gestion-livreurs.component';
import { GestionFournisseurComponent } from './Entities/Admin/gestion-fournisseur/gestion-fournisseur.component';
import { GestionLivraisonComponent } from './Entities/Admin/gestion-livraison/gestion-livraison.component';
import { GestionBanDeLivraisonComponent } from './Entities/Admin/gestion-ban-de-livraison/gestion-ban-de-livraison.component';
import { GestionProduitComponent } from './Entities/Admin/gestion-produit/gestion-produit.component';
import { HomeFournisseurComponent } from './Entities/Fournisseur/home-fournisseur/home-fournisseur.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LogInComponent,
    FooterComponent,
    HomeClientComponent,
    LivraisonComponent,
    HomeAdminComponent,
    NavbarAdminComponent,
    GestionLivreursComponent,
    GestionFournisseurComponent,
    GestionLivraisonComponent,
    GestionBanDeLivraisonComponent,
    GestionProduitComponent,
    HomeFournisseurComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
