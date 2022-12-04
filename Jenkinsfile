pipeline {
    agent { 
        name 'zorin' 
    }
    stages {
        stage("Update Node") {
            sh '''
                nvm use --lts
            '''
        }
        stage("Tool versioning") {
            sh 'node -v'
        }
    }

}