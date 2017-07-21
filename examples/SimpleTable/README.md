### Importing
```js
import {SimpleTable} from 'table';
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

const Example = () => (
	<SimpleTable
		columns={columns} // list of columns
		tableHead={tableHead} // list of column headings
		data={planets} // table data
		keyName="name" /* name of the field which value can
		                  be used for the key property (default: itteration index) */
		/>
);
```
