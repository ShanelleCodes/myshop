// t-shirt =    price_1PCoitIWuObHoMRrfxFCQj0M
// tote =  price_1PCokaIWuObHoMRrYNLdJmDi
// black shirt =   price_1PColHIWuObHoMRrVGuiElIv

const productArray =[
    {
        id: "price_1PCoitIWuObHoMRrfxFCQj0M",
        title: "Graphic T-shirt",
        price: 4.99
    },
    {
        id: "price_1PCokaIWuObHoMRrYNLdJmDi",
        title: "Tote Bag",
        price: 4.99
    },
    {
        id: "price_1PColHIWuObHoMRrVGuiElIv",
        title: "Black T-Shirt",
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