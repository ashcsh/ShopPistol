const Shop = (props) => {



    const checkQty = (product) => {
        let newarray = []
        props.cartList.map((newproduct)=>{
            if(product.id === newproduct.id){
                if(product.qty === null){
                    newarray.push({...product, qty: 1})
                }else{
                    newarray.push({...product, qty: product.qty+1})
                }
            }
        })
        return props.setCartList([...props.cartList, product])
    }

    return(
        <div style={{display:"flex", margin:"20px 20px"}}>
            {props.product.map((product) => {
                
                return <div style={{margin: 10, alignItems:"center", justifyContent:"center"}}>
                    <h3>{product.id}</h3>
                    <img src={product.image} alt="noImage"/>
                    <h3>{product.name}</h3>
                    <button onClick={() => {checkQty(product)}}>Add to Cart</button>
                </div>
            })}
        </div>
    )
}

export default Shop;