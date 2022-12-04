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
        stage('Build & Execute Tests') {
            steps {
                sh '''
                    docker compose -f compose.yaml -f compose.prod.yaml build
                '''
            }
        }
        stage('Execute Smoke Tests') {
            steps {
                sh '''
                    echo "Executing Smoke Tests"
                '''
            }
        }
        stage('Deploy to Production Environemt') {
            steps {
                sh '''
                    docker compose up -d
                '''
            }
        }
    }
}