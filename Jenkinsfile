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
        stage('Node') {
            steps {
                sh '''
                node -v
                '''
            }
        }
    }
}