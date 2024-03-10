# Documentation du Projet CI/CD

## Objectifs

- Créer des applications communiquant entre elles via API.
- Construire des Dockerfiles pour build les applications et créer des images contenant les artefacts.
- Élaborer des Jenkinsfiles pour automatiser le build et le déploiement des applications.

## Architecture du Projet

### Applications

- **Backend :** Application Spring Boot.
- **Frontend :** Application React.

### Environnement de Développement

- Utilisation d'une machine virtuelle Ubuntu 22.04 pour simuler un environnement AWS.
- Installation de Jenkins pour orchestrer le processus de CI/CD.
- Installation de Docker Engine pour exécuter des commandes Docker et gérer des conteneurs.
- Utilisation de Github pour mettre en place le CI (Continuous Integration).

## Processus

1. **Création des projets :** Développement des applications backend (Spring Boot) et frontend (React).
2. **Création des Dockerfiles :** Élaboration des Dockerfiles pour chaque application. Ces fichiers commandent la construction des images Docker incluant les artefacts générés par le build de l'application permettant ainsi leur déploiement.
3. **Création des dépôts Git :** Initialisation des dépôts Git pour chaque projet afin de versionner et de suivre l'évolution du code source.
4. **Création des Jenkinsfiles :** Mise en place des Jenkinsfiles pour automatiser le processus de build et de déploiement en utilisant Jenkins et Docker.

## Action réalisée manuellement

1. Configuration des repository git.
2. Configuration de la machine virtuelle Ubuntu 22.04 :
   - Openjdk:17.0.10
   - Jenkins
   - Npm
   - Docker engine
   - Docker CLI (optionnel)
3. Configuration Jenkins :
   - **Projet front :**
     - definition : Pipeline Script from SCM
     - SCM : GIT
     - Repository URL : `https://github.com/MatWarm/Devoir-frontEnd`
     - Branch specifier : `*/main`
     - Script Path : Jenkinsfile
   - **Projet Back :**
     - definition : Pipeline Script from SCM
     - SCM : GIT
     - Repository URL : `https://github.com/MatWarm/Devoir-BackEnd`
     - Branch specifier : `*/main`
     - Script Path : Jenkinsfile

## Défis et Solutions

### Problèmes et Solutions

- **Impossibilité de lancer les commandes Docker depuis l'utilisateur Jenkins :**
  Ajout de l'utilisateur Jenkins au groupe Docker. Cette action permet à l'utilisateur Jenkins d'exécuter des commandes Docker sans nécessiter de privilèges supplémentaires. Référence : Stack Overflow.

- **Échec du build de l'image Docker pour l'application frontend à l'étape `npm install` :**
  Ajout de npm sur la machine virtuelle.
