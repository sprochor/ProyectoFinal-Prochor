import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);
    const [quantityAdded, setQuantityAdded] = useState(0);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        addItem(item, quantity);
    };

    return (
        <div className="container mt-5">
            <div className="card mb-3 shadow p-3 mb-5 bg-body rounded border-0">
                <div className="row g-0">
                    <div className="col-md-4 text-center">
                        <img src={item.img} className="img-fluid rounded-start" alt={item.title} style={{ maxHeight: '400px' }}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title text-uppercase display-6">{item.title}</h2>
                            <p className="card-text text-muted">{item.category}</p>
                            <h3 className="text-primary fw-bold my-4">${item.price}</h3>
                            <p className="card-text lead">{item.description}</p>
                            
                            <hr />
                            
                            <div className="mt-4">
                                {quantityAdded > 0 ? (
                                    <div>
                                        <Link to="/cart" className="btn btn-success me-2">Terminar compra</Link>
                                        <Link to="/" className="btn btn-outline-primary">Seguir comprando</Link>
                                    </div>
                                ) : (
                                    <div className="d-flex align-items-center">

                                        <ItemCount initial={1} stock={item.stock} onAdd={handleOnAdd} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;