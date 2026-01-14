import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/config";

const Checkout = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);
    

    const [buyer, setBuyer] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const order = {
            buyer: buyer,
            items: cart,
            total: totalPrice,
            date: Timestamp.fromDate(new Date())
        };

        try {
            const ordersRef = collection(db, "orders");
            const docRef = await addDoc(ordersRef, order);
            setOrderId(docRef.id);
            clearCart();
        } catch (error) {
            console.error("Error al crear la orden:", error);
        } finally {
            setLoading(false);
        }
    };

    if (orderId) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h1>¡Gracias por tu compra! 🥂</h1>
                <p>Tu número de pedido es: <strong>{orderId}</strong></p>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input 
                    type="text" 
                    placeholder="Nombre completo" 
                    name="name"
                    value={buyer.name}
                    onChange={handleInputChange}
                    required
                    style={{ padding: '10px' }}
                />
                <input 
                    type="tel" 
                    placeholder="Teléfono" 
                    name="phone"
                    value={buyer.phone}
                    onChange={handleInputChange}
                    required
                    style={{ padding: '10px' }}
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    name="email"
                    value={buyer.email}
                    onChange={handleInputChange}
                    required
                    style={{ padding: '10px' }}
                />

                <button 
                    type="submit" 
                    disabled={loading}
                    style={{ padding: '10px', backgroundColor: '#722F37', color: 'white', border: 'none', cursor: 'pointer' }}
                >
                    {loading ? 'Generando orden...' : 'Comprar'}
                </button>
            </form>
        </div>
    );
}

export default Checkout;