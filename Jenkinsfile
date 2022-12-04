pipeline {
    agent { 
        label 'slave' 
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