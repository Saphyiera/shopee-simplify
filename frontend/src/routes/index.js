import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ForgotPassword from '../pages/ForgotPassword'
import SignUp from '../pages/SignUp'
import Cart from '../pages/Cart.js'
import Profile from '../pages/Profile.js'
import ProductDetail from '../pages/ProductDetails.js'
import Checkout from '../pages/Checkout.js'


const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "forgot-password",
                element : <ForgotPassword/>
            },
            {
                path : "sign-up",
                element : <SignUp/>
            },
            // {
            //     path : "product-category",
            //     element : <CategoryProduct/>
            // },
            {
                path : "product",
                element : <ProductDetail/>
            },
            {
                path : "cart",
                element : <Cart/>
            },
            {
                path : "profile",
                element : <Profile/>
            },
            {
                path : "checkout",
                element : <Checkout/>
            }
            // {
            //     path : "search",
            //     element : <SearchProduct/>
            // },
            // {
            //     path : "admin-panel",
            //     element : <AdminPanel/>,
            //     children : [
            //         {
            //             path : "all-users",
            //             element : <AllUsers/>
            //         },
            //         {
            //             path : "all-products",
            //             element : <AllProducts/>
            //         }
            //     ]
            // },
        ]
    }
])


export default router