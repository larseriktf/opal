import React from 'react'
import Image from 'next/image'
import styles from '../styles/Layout.module.scss'
import bg from '../images/bg.jpg'

function Layout({children}: {children : React.ReactNode}) {
	return (
		<div className={styles.background_container}>
			<div>
				<Image
					className={styles.background_image}
					src={bg}
					alt="Mountains"
					placeholder="blur"
					sizes="100vh"
					quality={100}
					fill />
				<p className={styles.background_image_credit}>
					Background: René Riegal (https://unsplash.com/@riegal)
				</p>	
			</div>
			<header className={styles.main_header}>
        <h1>Opal</h1>
			</header>
			<main className={styles.main_container}>
				{children}
			</main>
		</div>
	)
}

export default Layout
