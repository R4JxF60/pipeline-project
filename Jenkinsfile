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
    }
}