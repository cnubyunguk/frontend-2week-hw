function CityList(props){
	const {cities} = props;

	return (
		<div class="container">
			<h1>CityList</h1>

			<ul class="list">
				{cities.map((item, index) => {
					return <li key={index}>{item}</li>;
				})}
			</ul>

		</div>
	);
}

export default CityList