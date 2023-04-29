import '../portfoliobton.css';

export const PortfolioBton = () => {
	return (
		<div className="container">
			<a href="google.com" className="button">
				<div className="button__line"></div>
				<div className="button__line"></div>
				<span className="button__text">Back to portfolio</span>
				<div className="button__drow1"></div>
				<div className="button__drow2"></div>
			</a>
		</div>
	);
};
