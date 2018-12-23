import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

class SecondPage extends React.Component {
  state = {
    sent: false,
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ sent: true })
  }

  render() {
    return (
      <Layout>
        <SEO title="Page two" />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <h2> test netlify forms</h2>
        <form netlify onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="name" />
          <input type="email" name="email" placeholder="email" />
          <input type="date" name="startDate" />

          {this.state.sent ? (
            <p>thanks for submit!</p>
          ) : (
            <button type="submit" disabled={this.state.sent}>
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
