const productArray =[
    {
        id: "1",
        title: "Product 1",
        price: 4.99
    },
    {
        id: "2",
        title: "Product 2",
        price: 4.99
    },
    {
        id: "3",
        title: "Product 3",
        price: 4.99
    }
]

function getProductData(id){
    let productData = productArray.find(product => product.id === id)
    if(productData == undefined){
        console.log("product data does not exist for ID: " +id);
        return undefined
    }
    return productData;
}


export {productArray, getProductData};