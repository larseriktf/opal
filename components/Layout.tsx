import React from 'react'
import styles from '../styles/main.css'

function Layout({children}: {children : React.ReactNode}) {
	return (
		<>
			<header>
        <h1>Opal</h1>
			</header>
			<main>
				{children}
			</main>
		</>
	)
}

export default Layout
