import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase/config";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);


        const docRef = doc(db, "products", itemId);


        getDoc(docRef)
            .then((resp) => {
                if (resp.exists()) {
                   setItem( { id: resp.id, ...resp.data() } );
                } else {
                   console.log("El producto no existe");
                }
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));

    }, [itemId]);

    return (
        <div>
            {loading 
                ? <p>Cargando detalle...</p> 
                : item && <ItemDetail item={item} />
            }
        </div>
    );
};

export default ItemDetailContainer;