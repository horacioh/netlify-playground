import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class SecondPage extends React.Component {
  state = {
    sent: false,
    name: "",
    email: "",
    startDate: "",
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "product-request", ...this.state })
    })
      .then(result => {
        console.log(result);
        this.setState({sent: true})
      })
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, startDate, sent } = this.state;
    return (
      <Layout>
        <SEO title="Page two" />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <h2> test netlify forms</h2>
        <form
          name="product-request"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="product-request" />
          <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="name" />
          <input type="email" name="email" value={email} onChange={this.handleChange} placeholder="email" />
          <input type="date" name="startDate" value={startDate} onChange={this.handleChange} />

          {sent ? (
            <p>thanks for submit!</p>
          ) : (
            <button type="submit" disabled={sent}>
              Submit
            </button>
          )}
        </form>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default SecondPage
