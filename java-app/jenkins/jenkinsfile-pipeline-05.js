pipeline {
  agent {
     node { 
        label 'node01'
        options { timestamps() }

     } 
  }

  tools {
   maven 'maven-apache-3.8.4'
 }
 environment {
   MVN_WORKDIR = 'java-app'
}
stages {
 stage('Maven Package') {
   steps {
     dir('java-app'){
       sh 'mvn package'
     }
   }
 }
 stage('Run') {
   steps {
      cleanWs()
      sh 'java -jar $MVN_WORKDIR/target/my-app-1.0-SNAPSHOT.jar'
   }
 }
}




}