pipeline {
    agent { 
        label 'linux' 
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
        stages('Node') {
            steps {
                sh '''
                nvm use --lts
                '''
            }
        }
    }
}