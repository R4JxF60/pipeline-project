pipeline {
    agent {
        label 'linux'
    }
    stages {
        stage('Docker tools checking') {
            steps {
                sh '''
                    docker --version
                    docker compose version
                '''
            }
        }
        stage('Executing Tests') {
            steps {
                sh '''
                    docker compose build
                '''
            }
        }
        stage('Deploying to QA environment') {
            steps {
                sh '''
                    docker compose -f compose.yaml -f compose.dev.yaml up -d
                '''
            }
        }
    }
}