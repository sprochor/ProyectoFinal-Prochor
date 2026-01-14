import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const productosZuccardi = [
  {
    title: "Doña Paula Selección de Bodega Malbec",
    category: "tinto",
    price: 20000,
    stock: 21,
    img: "https://donapaula.com/wp-content/uploads/DP-SELECCIO%CC%81N-DE-BODEGA.png",
    description: "Color violeta profundo. Aromas a frutos del bosque, notas de grafito, cereza negra y especias. Gran concentración, taninos firmes, fresca acidez y largo final."
  },
  {
    title: "Doña Paula Alluvia Parcel",
    category: "tinto",
    price: 19000,
    stock: 15,
    img: "https://donapaula.com/wp-content/uploads/DP-PARCEL-ALLUVIA.png",
    description: "Posee un color violeta-negro profundo. Es un vino de gran complejidad aromática, donde encontramos intensas notas de frutos negros, como mora, arándano y frambuesa, combinadas con marcados toques minerales, como grafito. En boca, posee una gran amplitud y balance, con taninos firmes que hacen que el final de boca sea muy persistente."
  },
  {
    title: "Los Cardos Chardonnay",
    category: "blanco",
    price: 8000,
    stock: 14,
    img: "https://donapaula.com/wp-content/uploads/LOS-CARDOS-CHARDONNAY.png",
    description: "Color verde amarillo, dorado. Aromas intensos y tropicales con notas de mango, ananá y durazno. Muy buen volumen, balance y frescura. Cítrico y mineral."
  },
  {
    title: "Zuccardi Serie A Chardonnay",
    category: "blanco",
    price: 23000,
    stock: 25,
    img: "https://zuccardiwines.com/wp-content/uploads/2025/05/Zuccardi_Serie-A-Chardonnay-w.png",
    description: "Chardonnay mineral y fresco, de perfil salino."
  },
  {
    title: "Los Cardos Private Collection Sauvignon Blanc",
    category: "blanco",
    price: 16000,
    stock: 30,
    img: "https://donapaula.com/wp-content/uploads/LC_PC_SauvignonBlanc.png",
    description: "Color amarillo verdoso. Aromas muy intensos a fruto de la pasión, pomelo, lima y durazno blanco. En boca es fresco, balanceado, muy vivaz y persistente."
  },
  {
    title: "Doña Paula Sauvage Blanc",
    category: "espumante",
    price: 12000,
    stock: 15,
    img: "https://donapaula.com/wp-content/uploads/sb_new.png",
    description: "Doña Paula Sauvage Blanc presenta un color amarillo pálido. Posee aromas muy intensos a azahar y durazno blanco, con notas cítricas como pomelo, y un toque de menta. En boca es fresco, con acidez marcada, muy vivaz, y persistente."
  },
];

const CargaDatos = () => {
    const subirDatos = () => {
        const productosRef = collection(db, "products");
        
        productosZuccardi.forEach((prod) => {

            addDoc(productosRef, prod)
                .then((doc) => console.log(`Producto cargado: ${doc.id}`))
                .catch((err) => console.error("Error al subir: ", err));
        });
        
        alert("¡Vinos subidos a la nube! 🍷 Revisa tu consola.");
    }

    return (
        <button onClick={subirDatos} style={{ margin: '20px', padding: '15px', backgroundColor: '#722F37', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
            SUBIR VINOS ZUCCARDI A FIREBASE
        </button>
    )
}

export default CargaDatos;