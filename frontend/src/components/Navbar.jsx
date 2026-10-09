import { Link } from 'react-router-dom'
import '../Main.css'

const Navbar = () => {

    return (
        <header id = "header">
                     <h1 class = "heading">
                        <Link to="/">
                            <a>
                                <span>Own Notes</span>
                            </a>
                        </Link>
                     </h1>
                <nav id = "greeting">
                    <ul class = "links bar">
                        <li>
                            <Link to="/new">
                                <a>Post</a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/new">
                                <a>Profile</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}

export default Navbar