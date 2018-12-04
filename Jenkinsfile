pipeline {
  agent any
  stages {
    stage('Build') {
      parallel {
        stage('First step') {
          steps {
            error 'Please try again!'
            sleep 19
          }
        }
        stage('') {
          steps {
            sleep 10
          }
        }
      }
    }
    stage('Test') {
      steps {
        sleep 10
      }
    }
    stage('Deploy') {
      steps {
        echo 'hi'
      }
    }
  }
  environment {
    local = ''
  }
}