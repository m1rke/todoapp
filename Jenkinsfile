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
        stage('error') {
          steps {
            sleep 10
          }
        }
      }
    }
    stage('Test') {
      parallel {
        stage('Test') {
          steps {
            sleep 10
          }
        }
        stage('chrome') {
          steps {
            sh 'ech chrome'
          }
        }
        stage('firefox') {
          steps {
            sh 'echo firefox'
          }
        }
        stage('safari') {
          steps {
            sh 'echo safari'
          }
        }
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