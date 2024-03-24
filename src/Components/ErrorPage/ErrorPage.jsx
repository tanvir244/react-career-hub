import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>404</h2>
            <h2>Page not found</h2>
            <Link to="/">
                <button className="btn btn-primary">Go Back</button>
            </Link>
        </div>
    );
};

export default ErrorPage;