import { db } from 'config/firebase-config'
import { collection,addDoc, getDocs, doc, getDoc, query, where} from 'firebase/firestore';

export const getPosts = async () => {
    const contactList = await getDocs(collection(db,"posts"));
    const Postslist = []
    contactList.forEach((p) => {
      const post = p.data()
      post.id = p.id
      Postslist.push(post)
    });
    return Postslist
  };

  export const addContact = async (props) => {
  
    try {
      const docRef = await addDoc(collection(db, 'contactos'), {
        nombre: props.nombre,
        apellido: props.apellido,
        telefono: props.telefono
       });
  
      console.log("Document writen with ID: ", docRef.id);
      return docRef;
  
    } catch (e) {
      console.log("Error adding document: ", e);
    }
  };

export const authUser = async (props) => {
    const login = {
        username: props.username,
        password: props.password,
    }
    const q = query(collection(db, 'users'), where("username", "==", login.username), where("password", "==", login.password));
    const user = q.data()
    user.id = q.id
    if (login.username === user.username){
        if(login.password === user.password){
            return {
                result: "Success", 
                data: user
            }
        }
        return {
            result: "passwd",
            data: undefined
        }
    }else{
        return {
            result: "user",
            data:undefined
        }
    }
      
};