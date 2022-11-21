import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: "AIzaSyDCO8KliEOgW8WUXI6iq1byDRFn2-navls",
  authDomain: "cms-baghdad.firebaseapp.com",
  projectId: "cms-baghdad",
  storageBucket: "cms-baghdad.appspot.com",
  messagingSenderId: "96637471251",
  appId: "1:96637471251:web:7a2e8d03b50e28c76d0de6"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')

export const createUser = user => {
  return usersCollection.add(user)
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}
