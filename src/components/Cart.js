const Cart = (props) => {
    console.log(props.cartList)

    const removeCartItem = (product) => {
        const newcart = props.cartList.filter((data) => { 
            return data.id !== product.id })

         return props.setCartList(newcart)
    }


    return (
        <div style={{ display: "flex", margin: "20px 20px" }}>

            {props.cartList.map((product) => {

                return <div style={{ margin: 10, alignItems: "center", justifyContent: "center" }}>
                    <h3>{product.id}</h3>
                    <img src={product.image} />
                    <h3>{product.name}</h3>
                    <h3>Quantity: {product.qty}</h3>
                    <button onClick={() => { removeCartItem(product) }}>Remove</button>
                </div>
            })}
        </div>
    )
}

export default Cart;