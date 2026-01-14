import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, title, price, quantity }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <div className="d-flex justify-content-between align-items-center border-bottom py-3">
            <div>
                <h5 className="mb-0">{title}</h5>
                <small className="text-muted">Cantidad: {quantity} | Precio u.: ${price}</small>
            </div>
            <div className="d-flex align-items-center">
                 <span className="fw-bold me-3">Subtotal: ${price * quantity}</span>
                 <button 
                    onClick={() => removeItem(id)} 
                    className="btn btn-danger btn-sm"
                 >
                    X
                 </button>
            </div>
        </div>
    )
}

export default CartItem;