# Mini Projet de Scraping avec React, Node.js et Python
Ce projet est une application web simple qui vous permet de récupérer les liens et les adresses e-mail à partir d'une URL de site web fournie. L'application utilise React pour l'interface utilisateur, Node.js pour le backend, et Python avec BeautifulSoup (BS4) pour le scraping.
#
# Fonctionnement
1. **Installation des dépendances**

   Assurez-vous d'avoir Node.js et Python installés sur votre système.

   Pour installer les dépendances Node.js, exécutez la commande suivante dans le répertoire racine du projet :

   ```bash
   npm install
   ```
2. **Lancement de l'application**
   
   Pour lancer l'application, exécutez les commandes suivantes dans deux terminaux séparés :
   
   ***Terminal 1 (Frontend - React) :***
   ```bash
   npm run start
   ```
   ***Terminal 2 (Backend - Express) :***
     ```bash
     npm run dev //pour lancer le serveur avec nodemon
     ```
3. **Utilisation de l'applicationn**
   
   Une fois l'application lancée, ouvrez votre navigateur et accédez à http://localhost:5173/.

   Vous serez accueilli par une interface plutot simple qui va vous permettre de renseigné une url

4. **Scraping des liens et des adresses e-mail**
   
   Saisissez l'URL d'un site web dans le champ de saisie.
    Cliquez sur le bouton "Scrap" pour lancer la requête.
    Lorsque vous cliquez sur le bouton, une requête sera envoyée au serveur. Le backend exécutera alors un script Python en utilisant child_process pour effectuer le scraping.
    
    Le script Python utilisera BeautifulSoup pour extraire tous les liens <a> à partir de la page HTML de l'URL fournie. Ensuite, il appliquera une expression régulière pour extraire toutes les adresses e-mail trouvées dans les liens. Les liens et les adresses e-mail seront enregistrés dans un fichier JSON.

5. **Récupération des résultats**
  
      Une fois le scraping terminé, le backend récupérera les données du fichier JSON créé par le script Python. Les données seront renvoyées au frontend et affichées dans l'interface utilisateur sous forme de liste de liens et d'adresses e-mail.


## REMARQUE 

Ce projet a été conçu à des fins éducatives et pour démontrer un exemple simple d'utilisation de React, Node.js et Python pour le scraping de liens et d'adresses e-mail à partir d'un site web. Le respect des conditions d'utilisation et les politiques de confidentialité des sites web est important.
   
