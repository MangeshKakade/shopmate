import CartCard from "../components/CartCard"
import useTitle from "../hooks/useTitle"



const Cart = () => {

  useTitle("Cart");

  const products=[
    {"id":1, "name":"Sony wh-10 Blutooth Wireless", "price":149, "image":"/assets/images/1001.png"},
    {"id":2, "name":"Boat Rockerz 450", "price":49, "image":"/assets/images/1002.png"},  
  ]

  return (
    <main>
      <section className="cart">
        <h1>Cart Items:{products.length}</h1>
        {products.map((product)=>(
            <CartCard key={product.id} product={product} /> 
        ))}
        
      </section>
    </main>
  )
}

export default Cart
