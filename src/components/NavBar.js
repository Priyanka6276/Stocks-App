import { Link } from "react-router-dom";

export default function NavBar (props) {
    return (
        <div className="nav">
            <Link to="/">
                <h2>iStocks</h2>
            </Link>
            <Link to="stocks">
                <h3>Stocks</h3>
            </Link>
            <Link to="/about">
                <h3>About</h3>
            </Link>
        </div>
    )
}