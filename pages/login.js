import React from 'react';
import Head from 'next/head';
import Layout from '../layout/Layout';
function login() {
	return (
		<div>
			<Head>
				<title> Login</title>
			</Head>

			<Layout>
				<h1>Login</h1>
			</Layout>
		</div>
	);
}

export default login;
