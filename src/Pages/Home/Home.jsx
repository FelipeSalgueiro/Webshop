import { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import axios from 'axios'
import s from './Home.module.scss'
export default function Home() {
    const [product, setProduct] = useState([])
    const [trend, setTrend] = useState([])
    const callProduct = async () => {
        const item = await axios.get('https://fakestoreapi.com/products')
        setProduct(item.data)
    }
    const organizeTrend = async () => {
        let wellRated = [
            {
                ava: 0,
                ind: 0
            },
            {
                ava: 0,
                ind: 0
            },
            {
                ava: 0,
                ind: 0
            },]
        product.forEach((item) => {
            for (let i = 0; i < 3; i++) {
                if (wellRated[i].ava < item.rating.rate) {
                    wellRated[i].ind = item.id
                    wellRated[i].ava = item.rating.rate
                    wellRated.sort((a, b) => a.ava - b.ava)
                    console.log(wellRated)
                    i = 4
                }
            }
        })
        const topProducts = [product.at(wellRated[0].ind - 1), product.at(wellRated[1].ind - 1), product.at(wellRated[2].ind - 1)]
        setTrend(topProducts)
    }
    useEffect(() => {
        callProduct()
    }, [])
    useEffect(() => {
        if (product.length > 0) {
            organizeTrend()
        }
    }, [product])
    return (
        <main>
            <section className={s.trendCatalogSection}>
                <h2 className={s.catalogTitle}>Well Rated Products!</h2>
                <section className={s.trendCatalog}>
                    {trend.length > 0 ? (
                        trend.map((item) => (
                            <article className={s.trendCard}>
                                <div className={s.trendCardFirstHalf}>
                                    <img src={item.image} />
                                </div>
                                <div className={s.trendCardSecondHalf}>
                                    <h3>{item.title}</h3>
                                    <p>Rating: {item.rating.rate}</p>
                                    <h4>$ {item.price}</h4>
                                </div>
                            </article>
                        ))) : (<p>Carregando Produtos...</p>)}
                </section>
            </section>
        </main>
    )
}