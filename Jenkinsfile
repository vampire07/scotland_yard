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
        stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/vampire07/scotland_yard.git'
            }
        }
        stage('Provision Infrastructure') {
            steps {
                echo 'Provisioning Infrastructure with Terraform...'
                sh 'terraform init'               // Initialize Terraform
                sh 'terraform apply -auto-approve' // Apply Terraform configuration without user approval
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
