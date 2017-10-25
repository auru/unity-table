### Importing
```js
import {SimpleTable} from 'unity-table';
```

### Usage
```jsx
const columns = [
	{name: 'title'},
	{name: 'episode_id'},
	{name: 'release_date'},
	{name: 'director'}
];

const mapData = data => ({
	title: data.title
});

const mapAttr = data => ({
	title: {
		colSpan: 4
	}
});

const Example = () => (
	<SimpleTable
		columns={columns}
		tableHead={tableHead}
		mapData={mapData}
		mapAttr={mapAttr}
		data={data}
		/>
);
```
