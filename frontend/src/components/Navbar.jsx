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
                            <Link to="/new" className= 'link-text'>
                                <a>Post</a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Template" className= 'link-text'>
                                <a>Template</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* Dummy info */}
                <nav id = "sitebar">
                    <ul class = "barlist">
                        <li>
                            <Link to="/Work" className = "bar-text">
                                <a>User</a>
                            </Link>
                        </li>
                            <li>
                            <Link to="/Work" className = "bar-text">
                                <a>User</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}

export default Navbar