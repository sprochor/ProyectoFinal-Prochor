import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem"; // <--- Importamos el nuevo componente

const Cart = () => {
    const { cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div className="container text-center mt-5">
                <h2>No hay ítems en el carrito 😕</h2>
                <Link to="/" className="btn btn-primary mt-3">Volver al catálogo</Link>
            </div>
        )
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Tu Carrito</h2>
            
            {cart.map((p) => (
                <CartItem key={p.id} {...p} /> 
            ))}

            <div className="text-end mt-4">
                <h3>Total: ${totalPrice}</h3>
                <button onClick={() => clearCart()} className="btn btn-warning me-2">Limpiar Carrito</button>
                <Link to="/checkout" className="btn btn-success">Finalizar Compra</Link>
            </div>
        </div>
    )
}

export default Cart;