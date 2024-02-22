import React from "react";
import { useRouter } from "next/router";
import { data } from '../../utils/data';

const ProductPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const product = data.products.find((product) => product.id === parseInt(id));
    
    
    if(!product) {
        return <h2>Product Not Found</h2>
    }
    
    return (
        <div>{`Product: id - ${id}`}</div>
    )
}

export default ProductPage