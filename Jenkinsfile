pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'npm install' // Example for Node.js
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test' // Replace with relevant test command
            }
        }
        stage('SAST Analysis') {
            steps {
                script {
                    echo 'Running SonarQube analysis...'
                    withSonarQubeEnv('SonarQube') { // Ensure 'SonarQube' matches the name you configured in Jenkins
                        sh 'sonar-scanner' // This command runs the SonarQube scanner
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                sh 'npm run deploy' // Replace with deploy command
            }
        }
    }
}
