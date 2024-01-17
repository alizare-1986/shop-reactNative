import axios from "axios";

  const getProducts = async () => {
   
      const response = await axios.get('https://fakestoreapi.com/products');
     
     return response.data
    
  };
   const getProductsId = async (id) => {
   
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
     
     return response.data
    
  };

  export {getProducts,getProductsId}