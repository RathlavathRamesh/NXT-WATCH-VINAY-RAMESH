import { Component } from "react";
import './index.css'
class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        error: '',
      };
    }
  
    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      });
    };
  
    handleSubmit = (event) => {
      event.preventDefault();
  
      // Implement your authentication logic here (e.g., API call)
      // Handle successful login (redirect, store token, etc.)
      // Handle errors appropriately (show error message, display validation)
  
      // Example error message:
      this.setState({ error: 'Invalid email or password.' });
    };
  
    render() {
      const { email, password, error } = this.state;
  
      return (
            <div className="container bg-black place-content-baseline   h-full manualClass mx-auto flex justify-center items-center ">
          <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" className="imageEle" alt="themeimage" />
            <h2 className="text-2xl font-medium text-center mb-4">Login</h2>

            {error && <div className="text-red-500 font-bold text-center mb-4">{error}</div>}
  
            <form onSubmit={this.handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={this.handleChange}
                  name="email"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={this.handleChange}
                  name="password"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
  export default Login