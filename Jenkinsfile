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
        stage('Build & execute tests') {
            steps {
                sh '''
                    docker compose build
                '''
            }
        }
        stage('Execute smoke tests') {
            when {
                branch 'main'
            }
            steps {
                sh '''
                    echo "Executing Smoke Tests"
                '''
            }
        }
        stage('Deploying to production environemt') {
            steps {
                sh '''
                    docker compose --profile prod up -d
                '''
            }
        }
    }
}