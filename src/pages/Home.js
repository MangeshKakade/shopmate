import ProductCard from '../components/ProductCard'
import useTitle from '../hooks/useTitle'

const Home = () => {

  useTitle("Home");
  
  const products=[
    {"id":1, "name":"Sony wh-10 Blutooth Wireless", "price":149, "image":"/assets/images/1001.png"},
    {"id":2, "name":"Boat Rockerz 450", "price":49, "image":"/assets/images/1002.png"},
    {"id":3, "name":"Logitech H111 Blutooth Wireless", "price":19, "image":"/assets/images/1003.png"},
    {"id":4, "name":"Nokia Blutooth Wireless", "price":249, "image":"/assets/images/1004.png"},
    {"id":5, "name":"Samsung Blutooth Wireless", "price":449, "image":"/assets/images/1005.png"},
    {"id":6, "name":"Apple Blutooth Wireless", "price":649, "image":"/assets/images/1006.png"},
    
  ]


  return (
    <main>
      <section className="products">
        {products.map((product)=>(
            <ProductCard key={product.id}   product={product}/> 
        ))}
          
      </section>
    </main>
  )
}

export default Home
