import {getAllProducts} from "@/service/productService";
import {ProductCard} from "@/components/ProductCard";

const ProductPage = async () => {
    const {payload: prods} = await getAllProducts();
    console.log("this is the prod: " + prods)
    return <div className="grid grid-cols-2 gap-5 ">
        {(prods.length > 1) &&
            prods.map((prod) => <ProductCard key={prod.id} product={prod}/>)}
    </div>
}
export default ProductPage;