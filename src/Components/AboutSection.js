import profilepicjoe from '../Images/profilepicjoe.JPG';
// Styles import
import styled from 'styled-components';

const AboutSection = () => {
	return (
		<section className='aboutSection-container'>
			<div className='description'>
				<div className='title'>
					<div className='hide'>
						<h2>We work to make</h2>
					</div>
					<div className='hide'>
						<h2>
							your <span>dreams</span> come
						</h2>
					</div>
					<div className='hide'>
						<h2>true.</h2>
					</div>
					<p>
						Developing User Interfaces
					</p>
					<button>Contact</button>
				</div>
				<Image>
					<img src={profilepicjoe} alt='Developer Joe' />
				</Image>
			</div>
		</section>
	);
};

// styled components
const Image = styled.div`
	img {
		width: 50%;
	}
`;
export default AboutSection;
