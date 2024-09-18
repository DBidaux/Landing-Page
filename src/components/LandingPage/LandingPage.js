import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import PageIntro from '../PageIntro/PageIntro'

export default function LandingPage() {
	return (
		<div className='landing-page'>
			<Header />
			<PageIntro/>
			<Footer/>
		</div>
	)
}
