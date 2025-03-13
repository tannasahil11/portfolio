import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-1">404</h1>
      <h2 className="mb-4">Page Not Found</h2>
      <p className="lead mb-4">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-outline-light">
        Return Home
      </Link>
    </div>
  );
}

export default NotFound;