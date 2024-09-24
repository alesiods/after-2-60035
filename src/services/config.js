
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDXrSsuO4FF7xerxGOr1Xl0tj3jm-Z-_us",
  authDomain: "marolio-60035.firebaseapp.com",
  projectId: "marolio-60035",
  storageBucket: "marolio-60035.appspot.com",
  messagingSenderId: "801018924720",
  appId: "1:801018924720:web:ff71c178147002dad3f575"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)

///////////////////////////////////////////////////////////////////////////////////

/* const misProductos = [
    { nombre: "Yerba", stock: 100, precio: 10000, img: "../img/yerba.jpg", idCat: "lacteos", descripcion: "Yerba de palo, altamente seleccionada" },
    { nombre: "Fideos", stock: 120, precio: 200, img: "../img/fideos.jpg", idCat:"lacteos", descripcion: "Fideos linea premiun" },
    { nombre: "Arroz", stock: 50, precio: 300, img: "../img/arroz.jpg", idCat:"almacen", descripcion: "Arroz doble carolina especial que no se pega" }, 
    { nombre: "Aceite", stock: 70, precio: 900, img: "../img/aceite.jpg", idCat:"almacen", descripcion: "Aceite de primera linea" },
]
import {collection, doc, writeBatch} from "firebase/firestore"

const subirProductos = async () => {
    const batch = writeBatch(db)
    const productosRef = collection(db, "productos")

    misProductos.forEach((producto)=>{
        const nuevoDoc = doc(productosRef) //crea un nuevo dociumento con un ID automatico
        batch.set(nuevoDoc, producto)// Agrega la operacion de escritura al batch
    })

    try {
        await batch.commit();
        console.log("Productos subidos exitosamente")
    } catch(error) {
        console.log("Error subiendo productos:", error)
    }

}

subirProductos() */