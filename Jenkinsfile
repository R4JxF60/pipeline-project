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
        stage('Build & executing tests') {

            steps {
                sh '''
                    docker compose build
                '''
            }
        }
        stage('Deploying to QA environment') {
            when {
                branch 'dev'
            }

            steps {
                sh '''
                    docker compose --profile dev up -d
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
            when {
                branch 'main'
            }
            steps {
                sh '''
                    docker compose --profile prod up -d
                '''
            }
        }
    }
}