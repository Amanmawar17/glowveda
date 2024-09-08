import Footer from "./components/Footer";
import { GetApp, GetHear } from "./components/GetAppnHear";
import Navbar from "./components/Navbar"
import BeautyEssentialCarausel from "./components/ProductSlideShow";


export default function Home() {
  return (<>
    <Navbar />
    <main className="min-h-screen">
      {/* Beauty Essentials display for you section */}
      <div className="pb-20 max-w-screen-2xl m-auto">
        <h3 className="font-poppins font-bold text-2xl md:text-3xl lg:text-4xl text-foreground text-center mb-20 px-2">
          Beauty Essentials for a Healthier You!
        </h3>
        <div className="my-10">
          <BeautyEssentialCarausel />
        </div>
      </div>
      <GetApp />
      <GetHear />
    </main>
    <Footer />
  </>
  );
}
