### Exercice 1 IONIC (cours [Openclassrooms](https://openclassrooms.com/fr/courses/5098931-developpez-une-application-mobile-multiplateforme-avec-ionic-3/exercises/2811#/step1))

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






