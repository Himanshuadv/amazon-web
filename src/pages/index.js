import Head from "next/head";
import Header from "../components/Header";
import Banner from "@/components/Banner";
import ProductFeed from "@/components/ProductFeed";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />
      <main >
        <Banner />
        <ProductFeed products={products} />
        {/* <p>{products.length}</p> */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        products: [],
      },
    };
  }
}
