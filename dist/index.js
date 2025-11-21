import { fetchProductCatalog } from "./apiSimulator.js";
//fetch all of our products 
//call the function
//with promises with have to use the .then gives us back our product.
//.catch will give us back our errors
fetchProductCatalog()
    .then((products) => console.log("Products:", products))
    .catch((err) => console.error("error:", err));
