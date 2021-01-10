import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'

const ThirdPage = () => (
    <Layout>
        <h1>Hi from third page</h1>
        <p>Welcome to Page 3</p>
        <Link to="/">Back to Home Page</Link>
    </Layout>
)

export default ThirdPage;