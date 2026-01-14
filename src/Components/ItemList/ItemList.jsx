import Item from "../Item/Item";

const ItemList = ({ products }) => {
    return (

        <div className="container py-3"> 
            <div className="row justify-content-center">
                {products.map((prod) => (
                    <Item key={prod.id} {...prod} />
                ))}
            </div>
        </div>
    )
}

export default ItemList;