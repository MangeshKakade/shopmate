import {Home, Cart} from "../pages";
import {Routes ,Route} from "react-router-dom";

const AllRoutes = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default AllRoutes
