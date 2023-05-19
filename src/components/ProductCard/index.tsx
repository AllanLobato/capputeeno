import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
    imageUrl: string;
    name: string;
    price: string;
    id: string;
}

export function ProductCard({ imageUrl, name, price, id }: ProductCardProps) {
    return (
        <Link href={`/product/${id}`} passHref>
            <div className="w-200 h-72">
                <Image
                    className="object-cover w-full h-full"
                    src={imageUrl}
                    alt={`imagem ${name}`}
                    layout="fill"
                />
            </div>
            <div>
                <p>{name}</p>
                <strong>{price}</strong>
            </div>
        </Link>
    );
}



// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// import { Container } from "./styles";

// interface ProductCardProps {
//   imageUrl: string;
//   name: string;
//   price: string;
//   id: string;
// }

// export function ProductCard({ imageUrl, name, price, id }: ProductCardProps) {
//   return (
//     <Link href={`/product/${id}`} passHref>
//       <Container>
//         <Image
//           width="256px"
//           height="300px"
//           src={imageUrl}
//           alt={`imagem ${name}`}
//         />
//         <div>
//           <p>{name}</p>
//           <strong>{price}</strong>
//         </div>
//       </Container>
//     </Link>
//   );
// }