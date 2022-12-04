pipeline {
    agent {
        label 'host_slave'
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
        stage('Executing Tests')
    }
}