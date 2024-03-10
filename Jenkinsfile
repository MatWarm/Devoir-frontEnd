pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'app-frontend:v1.0.0'
    }

    stages {
        stage('Initialisation') {
            steps {
                echo 'Démarrage du pipeline...'
            }
        }
        stage('Dockerisation') {
            steps {
                echo 'Construction de l\'image Docker avec build intermédiaire...'
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }
    }
    post {
        success {
            echo 'Image Docker de l\'application React construite avec succès.'
            echo 'Utilisez "docker run -p 80:80 $DOCKER_IMAGE" pour servir l\'application.'
        }
        failure {
            echo 'Le pipeline a échoué.'
        }
    }
}
