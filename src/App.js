import './App.css'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

function App() {
	const { width, height } = useWindowSize()
	console.log(width, height)
	return (
		<div className='App'>
			<Confetti width={width} height={height} />
			<header className='App-header'>
				<p>Batoul must kiss Mehran once per hour</p>
				<a
					className='App-link'
					href='https://twitter.com/batoulalkarim'
					target='_blank'
					rel='noopener noreferrer'
				>
					Batoul and Mehran
				</a>
			</header>
		</div>
	)
}

export default App
