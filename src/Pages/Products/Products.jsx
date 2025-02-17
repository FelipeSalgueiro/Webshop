import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'
import s from './Products.module.scss'
export default function Products() {
    const [product, setProduct] = useState([])
    const callProduct = async () => {
        const item = await axios.get('https://fakestoreapi.com/products')
        setProduct(item.data)
    }
    useEffect(() => {
        callProduct()
    }, [])
    return (
        <main>
            <section className={s.catalog}>
                {product.map((item) => (
                    <Link key={item.id} to='/' className={s.productCard} >
                        <img src={item.image} />
                        <div>
                            <h2>{item.title}</h2>
                            <p>Rating: {item.rating.rate}</p>
                        </div>
                        <h3>$ {item.price}</h3>
                    </Link>
                ))}
            </section>
        </main>
    )
}