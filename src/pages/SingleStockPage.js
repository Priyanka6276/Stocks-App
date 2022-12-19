import { useParams } from "react-router-dom"
import stocks from "../data"

export default function SingleStockPage (props) {
    const { symbol } = useParams()
    return(
        <div>
            {stocks.filter((stock) => stock.symbol === symbol).map((stock, idx) => (
                <div key={idx} className="stock-page">
                    <h2>Name: {stock.name}</h2>
                    <h3>Price: {stock.lastPrice}</h3>
                    <h3>Change: {stock.change}</h3>
                    <h3>High: {stock.high}</h3>
                    <h3>Low: {stock.low}</h3>
                    <h3>Open: {stock.open}</h3>
                </div>
            ))}
        </div>
    )
}