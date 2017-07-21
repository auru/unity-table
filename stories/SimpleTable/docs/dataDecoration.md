### Importing
```js
import {SimpleTable} from 'unity-table';
```

### Usage
```jsx
const columns = [
	{name: 'name'},
	{name: 'diameter'},
	{name: 'population'}
];

const tableHead = () => ({
	name: 'Planet name',
	diameter: 'Diameter',
	population: 'Population'
});

// function that decorates item data
const mapData = ({name, population, diameter}) => ({
	name, // don't change anything
	diameter: km(diameter), // display diameter in kilometers
	population: humanNumber(population) // display shorter
});

const Example = () => (
	<SimpleTable
		columns={columns}
		tableHead={tableHead}
		mapData={mapData} // put it here
		data={planets}
		/>
);
```
