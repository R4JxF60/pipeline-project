pipeline {
    agent { 
        label 'linux' 
    }
    stages {
        stage('Docker tools versions') {
            steps {
                sh '''
                    docker --version
                    docker compose version
                '''
            }
        }
        stage('build') {
            steps {
                sh '''
                    docker compose -f compose.yaml -f compose.prod.yaml build
                '''
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                    docker compose -f compose.yaml -f compose.prod.yaml up -d
                '''
            }
        }
    }
}