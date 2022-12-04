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
                    docker compose build
                '''
            }
        }
        stage('Execute Smoke Tests') {
            when {
                branch 'main'
            }
            steps {
                sh '''
                    echo "Executing Smoke Tests"
                '''
            }
        }
        stage('Deploy to Production Environemt') {
            steps {
                sh '''
                    docker compose --profile prod up -d
                '''
            }
        }
    }
}