import { Link } from "react-router-dom";

const Item = ({ id, title, price, category, img, stock }) => {
    return (
        <div className="col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm border-0">
                <div style={{ height: '250px', overflow: 'hidden', padding: '10px' }}>
                    <img src={img} className="card-img-top h-100" style={{ objectFit: 'contain' }} alt={title} />
                </div>
                
                <div className="card-body d-flex flex-column text-center">
                    <h5 className="card-title text-dark">{title}</h5>
                    <p className="card-text text-muted text-uppercase small">{category}</p>
                    <h4 className="card-text fw-bold text-primary">${price}</h4>
                    
                    {/* Botón al fondo */}
                    <Link to={`/item/${id}`} className="btn btn-outline-dark mt-auto w-100">
                        Ver Detalles
                    </Link>
                </div>
                <div className="card-footer bg-white border-0 text-center text-muted small">
                    Stock disponible: {stock}
                </div>
            </div>
        </div>
    )
}

export default Item;