import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Firebase/config";
import ItemList from "../ItemList/ItemList";
import Hero from "../Hero/Hero"; //

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // Capturamos la categoría de la URL
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        const productsRef = collection(db, "products");
        const q = categoryId 
                  ? query(productsRef, where("category", "==", categoryId))
                  : productsRef;

        getDocs(q)
            .then((resp) => {
                const newItems = resp.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                });
                setProducts(newItems);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));

    }, [categoryId]);

    return (
        <div>
            {!categoryId && <Hero />} 

            <h2 style={{ 
                textAlign: 'center', 
                margin: '20px 0',  // <--- CAMBIAR ESTO (Antes 40px)
                fontFamily: "'Playfair Display', serif",
                color: '#333'
            }}>
                {categoryId ? `Vinos ${categoryId}` : "Nuestro Catálogo"}
            </h2>

            {loading ? (
                <div className="text-center mt-5">
                    <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    )
}

export default ItemListContainer;