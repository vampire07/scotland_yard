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
                    withSonarQubeEnv('SonarQube') {
                        sh 'SonarQube Scanner for Jenkins'
                    }
                }
            }
        }
        stage('DAST Testing') {
            steps {
                script {
                    zap(
                        zapHome: '/snap/zaproxy/current',
                        target: 'http://192.168.2.212:9000',
                        report: 'zap_report.html',
                        failAllAlerts: false
                    )
                }
            }
        }
        stage('Dependency Scanning') {
            steps {
                dependencyCheckAnalyzer pattern: '**/*.jar'
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
