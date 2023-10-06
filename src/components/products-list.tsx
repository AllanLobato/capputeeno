import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "./ProductCard";


export function ProductsList( ) {
    const {data} = useProducts();
    console.log(data);
    return (
        <div className="grid grid-cols-4 gap-8 w-max"   >         
        {data?.map(product => 
            <ProductCard
                key={product.id}
                name={product.name}
                price={product.price_in_cents}
                imageUrl={product.image_url}
            />
            )}
            </div>

    );
    }
    