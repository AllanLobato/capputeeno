import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
    imageUrl: string;
    name: string;
    price: number;
    id: string;
}

export function ProductCard({ imageUrl, name, price, id }: ProductCardProps) {
    return (
        <Link href={`/product/${id}`} passHref>
            <div>
                <Image
                    className="flex flex-col rounded-t-lg  cursor-pointer bg-white ml-3 mt-3"
                    src={imageUrl}
                    alt={`imagem ${name}`}
                    width={256}
                    height={300}
                    layout="instrinsic"
                />
            </div>
            <div className="flex-1 h-{78} pb-3 ml-3 rounded-sm bg-white align-middle">
                <p className="font-sans pt-3 pl-3">{name}</p>
                <strong className="font-sans pt-3 pl-3">R${price}</strong>
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