import { useQuery, gql } from '@apollo/client';
import { ProductCard } from '@/components/ProductCard';
import { Product } from '@/models/Product';
import { FilterBar } from '@/components/filter-bar';

const GET_DATA = gql`
  query Product {
    allProducts {
      name
      description
      image_url
      category
      id
      price_in_cents
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Ocorreu um erro.</p>;

  console.log(data.allProducts); // Faça algo com os dados recebidos

  let productCards = null;
  if (Array.isArray(data.allProducts)) {
    productCards = data.allProducts.map((product: Product) => (
      <ProductCard
        key={product.id}
        id={product.id}
        imageUrl={product.image_url}
        name={product.name}
        price={product.convertedPrice || "0"}
      />
    ));
  } else {
    console.error('data.allProducts não é um array');
  }

  return (
    <div className="flex w-full h-screen justify-center">

      <main>
        <FilterBar />
        <div className="max-w-1120 w-full h-full grid grid-cols-4 py-6 px-3">

          {productCards}
        </div>
      </main>
    </div>
  );
}

