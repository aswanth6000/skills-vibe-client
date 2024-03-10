import ProductCard from "@/components/product-card";
import CtaCard from "@/components/cta-card";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center flex-col">
        <CtaCard />
        <section className="grid grid-cols-3 gap-1">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </section>
        <footer>
          <Footer/>
        </footer>
      </main>
    </>
  );
}
