import { useQuery, gql } from '@apollo/client';
import { ProductCard } from '@/components/ProductCard';
import { Product } from '@/models/Product';

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
    <div className="h-screen">
      <div>
        <main>
          <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Produtos</h1>
            {productCards}
          </div>
        </main>
      </div>
    </div>
  );
}

