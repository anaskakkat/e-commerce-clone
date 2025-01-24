/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import  { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ 
      error: error,
      errorInfo: errorInfo 
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error-boundary">
          <h1>Something went wrong.</h1>
          {this.state.error && (
            <details>
              <summary>Error Details</summary>
              <p>{this.state.error.toString()}</p>
              <pre>{this.state.errorInfo.componentStack}</pre>
            </details>
          )}
          {this.props.fallback || (
            <button onClick={() => window.location.reload()}>
              Reload Page
            </button>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;