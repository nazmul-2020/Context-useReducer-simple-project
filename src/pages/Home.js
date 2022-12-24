import ProductCard from '../components/ProductCard';
import { useProduct } from '../context/ProductProvider';

const Home = () => {
    const { 
        state: { product },
     } = useProduct();

// console.log(state)

    return (
        <div>
            <h1>Home</h1>
            <h1>Data: {product.length}</h1>
            {
                product.map((products) => (
                <ProductCard products={products} />))
            }
        </div>
    );
};

export default Home;