import BannerCategories from "./ui/BannerCategories"
import 'react-multi-carousel/lib/styles.css';
import HomeBanner from "./ui/HomeBanner";
import HightLights from "./ui/HightLights";
import Categories from "./ui/Categories";
import ProductList from "./ui/ProductList";
function App() {

  return (
    <main>
      <BannerCategories />
      <HomeBanner />
      <HightLights />
      <Categories />
      {/* ProductList */}
      <ProductList />
    </main>
  )
}

export default App
