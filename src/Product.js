import React from 'react'

const Product = (prop) => {
    const [products,newProducts] = prop.prodprop
    console.log("what is product: ",products)
    console.log("what is new product: ",newProducts)
  return (
    <div className='style1'>
        <h1>Products</h1>
        <div class="container">
            <div class="row">
                {products.map((productList)=>{
                    return(
                        <div class="col-sm">
                            <img src={productList.img} alt="products"/>
                            <h4>{productList.name}</h4>
                            <p>{productList.desc}</p>
                            <h4>{productList.price}</h4>
                        </div>
                    )
                })}
            </div>
            <div class="row">
                {newProducts.map((newProductList)=>{
                    return(
                        <div class="col-sm">
                            <img src={newProductList.img} alt="products2" style={{width:"300px",height:"300px"}}/>
                            <h4>{newProductList.name}</h4>
                            <p>{newProductList.desc}</p>
                            <h4>{newProductList.price}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Product
