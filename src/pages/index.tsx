import { FilterBar } from '@/components/filter-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProductsList } from '@/components/products-list';

export default function Home() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <div className="flex w-full h-screen justify-center">
      <main>

        <FilterBar />
        <div className="max-w-1120 w-full h-full grid grid-cols-4 py-6 px-3">
        <ProductsList />
        </div>
        
      </main>

      </div>
      
    </QueryClientProvider>
  )
}
//   const { loading, error, data } = useQuery(GET_DATA);

//   if (loading) return <p>Carregando...</p>;
//   if (error) return <p>Ocorreu um erro.</p>;

//   console.log(data.allProducts); // Faça algo com os dados recebidos

//   let productCards = null;
//   if (Array.isArray(data.allProducts)) {
//     productCards = data.allProducts.map((product: Product) => (
//       <ProductCard
//         key={product.id}
//         id={product.id}
//         imageUrl={product.image_url}
//         name={product.name}
//         price={product.convertedPrice || "0"}
//       />
//     ));
//   } else {
//     console.error('data.allProducts não é um array');
//   }

//   return (
//     <div className="flex w-full h-screen justify-center">

//       <main>
//         <FilterBar />
//         <div className="max-w-1120 w-full h-full grid grid-cols-4 py-6 px-3">

//           {productCards}
//         </div>
//       </main>
//     </div>
//   );
// }

