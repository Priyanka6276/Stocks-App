import { Link } from "react-router-dom";
import stocks from "../data";

export default function StocksPage(props) {
    return (
        <div className="stocks">
            {
                stocks.map((stock) => {
                    const { name, symbol } = stock
                    return (
                        <ul>
                            <li>
                                <Link to={`/stocks/${symbol}`}>
                                    <div>{name}</div>
                                </Link>
                            </li>
                        </ul>
                    )
                })
            }
        </div>
    )
}