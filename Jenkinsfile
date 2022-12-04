pipeline {
    agent { 
        label 'any' 
    }
    stages {
        stage('Tooling versions') {
            steps {
                sh '''
                docker --version
                docker compose version
                '''
            }
        }
    }
}