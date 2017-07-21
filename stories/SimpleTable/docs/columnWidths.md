### Importing
```js
import {SimpleTable} from 'unity-table';
```

### Usage
```jsx
const columns = [
	{name: 'name'}, // auto column width
	{name: 'diameter', width: '80px'}, // 80px width
	{name: 'population', width: '80px'} // 80px width
];

const tableHead = () => ({
	name: 'Planet name',
	diameter: 'Diameter',
	population: 'Population'
});

const mapData = ({name, population, diameter}) => ({
	name,
	diameter: km(diameter),
	population: humanNumber(population)
});

const Example = () => (
	<SimpleTable
		columns={columns}
		tableHead={tableHead}
		mapData={mapData}
		data={planets}
		/>
);
```
