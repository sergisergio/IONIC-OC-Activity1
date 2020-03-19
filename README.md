### Exercice 1 IONIC (cours [Openclassrooms](https://openclassrooms.com/fr/courses/5098931-developpez-une-application-mobile-multiplateforme-avec-ionic-3/exercises/2811#/step1))

![image](https://raw.githubusercontent.com/sergisergio/IONIC-OC-Activity1/master/ionic.png)

![image](https://raw.githubusercontent.com/sergisergio/IONIC-OC-Activity1/master/ionic2.png)

### Pré-requis

- [NODE.JS](https://nodejs.org/en/download/)

- [NPM](https://docs.npmjs.com/)
``` bash
npm install -g npm@latest
```

- IONIC CORDOVA
``` bash
npm install -g ionic cordova
```

[DOC ANGULAR](https://angular.io/)
[DOC TYPESCRIPT](https://www.typescriptlang.org/docs/home.html)
[DOC IONIC](https://ionicframework.com/docs/)

### Créer le projet

``` bash
ionic start IONIC-OC-Activity1 blank
```

``` bash
cd IONIC-OC-Activity1
ionic serve

```
Aller sur http://localhost:8100

#### Création des components

``` bash
ionic generate page book-list --no-module
```
- même chose pour cd-list, lend-book, lend-cd, settings et tabs.
- Ajout dans app.module dans les parties "declarations" et "entry-components".
- Dans home.html, mise en place d'un bouton avec une méthode "onGoToBooks()": cette méthode, qui se trouve dans home.ts, nous renvoie vers le component BookListPage qui contient la liste des livres.

#### Création des onglets

- Dans TabsPage, on définit les propriétés de nos 2 onglets.
- Puis dans la vue, on utilise les components ion-tabs pour créer les tabs de navigation.
- Enfin, dans AppComponent, on définit TabsPage en tant que rootPage (rootPage:any = TabsPage;).

#### Liste de livres

- Création d'une liste de livres dans book-list.ts et affichage de cette liste avec une boucle *ngFor.
- components ion-list, ion-cards, ion-card-header et ion-card-content utilisés pour l'affichage.
- Chaque livre nous envoie sur une fenêtre modale dans laquelle on retrouve 2 boutons pour prêter ou emprunter le livre.
- Un "alert" apparaît pour confirmer le prêt ou la restitution du livre.
- ion-grid est utilisé pour agencer la vue avec les boutons.


#### Ouverture d'une fenêtre modale permettant de prêter ou de rendre l'élément.

#### Les éléments prêtés auront une couleur différente.

#### Un menu latéral permettra d'accéder à une page de réglages.




