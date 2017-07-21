### Importing
```js
import {Table, Thead, Tbody, Tr, Th, Td} from 'table';
```

### Usage
```jsx
<Table>
	<Thead>
		<Tr>
			<Th>Planet name</Th>
			<Th>Diameter</Th>
			<Th>Population</Th>
		</Tr>
	</Thead>
	<Tbody>
		{planets.map(planet => (
			<Tr>
				<Td>{planet.name}</Td>
				<Td>{planet.diameter}</Td>
				<Td>{planet.population}</Td>
			</Tr>
		))}
	</Tbody>
</Table>
```
