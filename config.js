import firebase from 'firebase';

  var firebaseConfig = {
    //cole seu SDK aqui 
      apiKey: "AIzaSyDQkRscLq_VI_ZpqQsIUB0H_k_XsJLvmsM",
      authDomain: "projeto-58-de17e.firebaseapp.com",
      projectId: "projeto-58-de17e",
      storageBucket: "projeto-58-de17e.appspot.com",
      messagingSenderId: "296840229432",
      appId: "1:296840229432:web:9e7925f0c329029dcbeccd"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);


    


  // Inicialize o Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();