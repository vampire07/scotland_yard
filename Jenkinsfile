pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'npm install' // Example for Node.js
            }
        }
        stage('SAST Analysis') {
            steps {
                echo 'Running SonarQube Analysis...'
                withSonarQubeEnv('SonarQube') {
                    sh 'sonar-scanner -Dsonar.projectKey=my-app'
                }
            }
        }
        stage('DAST Testing') {
    steps {
        echo 'Running OWASP ZAP...'
        zap(
            zapHome: '/snap/zaproxy/current',
            target: 'http://<your-app-url>',
            report: 'zap_report.html',
            failAllAlerts: false
        )
    }
}

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test' // Replace with relevant test command
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
