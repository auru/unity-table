# unity-table
> Table component for React

* [SimpleTable](#simpletable)
  * [Displaying raw data](#displaying-raw-data)
  * [Decorating data](#decorating-data)
  * [Specifying column widths](#specifying-column-widths)
  * [Sort data](#sort-data)
* [Plain usage (layout only)](#plain-usage-layout-only)

## `SimpleTable`

### Displaying raw data

```jsx
import {SimpleTable} from 'unity-table';

const columns = [
  {name: 'title'},
  {name: 'episode_id'},
  {name: 'release_date'},
  {name: 'director'},
  {name: 'producer'}
];

const tableHead = () => ({
  title: 'Title',
  episode_id: 'Episode number',
  release_date: 'Release date',
  director: 'Director',
  producer: 'Producers'
});

const Example = () => (
  <SimpleTable
    columns={columns}
    tableHead={tableHead}
    data={data}
    keyName="title"
    />
);
```

### Decorating data

```jsx
const columns = ...;
const tableHead = ...;

// data mapping function
const mapData = ({title, episode_id, release_date, director, producer}) => ({
  title,
  episode_id,
  release_date: humanDate(release_date), // <- butify date
  director,
  producer
});

const Example = () => (
  <SimpleTable
    columns={columns}
    tableHead={tableHead}
    mapData={mapData} // <- put mapData here
    data={data}
    keyName="title"
    />
);
```

### Specifying column widths

```jsx
const columns = [
  {name: 'title', width: '150px'},
  {name: 'episode_id', width: '60px'},
  {name: 'release_date', width: '70px'},
  {name: 'director', width: '90px'},
  {name: 'producer', width: '230px'}
];
```

### Sort data

```jsx
const columns = [
  {name: 'title', width: '150px', sortable: true}, // <- available for sorting
  {name: 'episode_id', width: '60px', sortable: true}, // <- available for sorting
  {name: 'release_date', width: '70px', sortable: true}, // <- available for sorting
  {name: 'director', width: '90px', sortable: true}, // <- available for sorting too
  {name: 'producer', width: '230px'}
];

export default class Example extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      // initial sorting
      sort: {field: 'release_date', asc: true}
    };

    this.handleSortChange = this.handleSortChange.bind(this);
  }

  handleSortChange({field, asc}) {
    // set new sorting to the state
    this.setState({sort: {field, asc}});
  }

  getSortedData() {
    const {field, asc} = this.state.sort;
    return sort(field, asc, data);
  }

  render() {
    return (
      <SimpleTable
        columns={columns}
        tableHead={tableHead}
        mapData={mapData}
        sort={this.state.sort} // <- current sort
        onSortChange={this.handleSortChange} // <- sort changing handler
        data={this.getSortedData()} // <- put sorted data
        keyName="title"
        />
    );
  }
}
```

## Plain usage (layout only)

```js
import {Table, Thead, Tbody, Tr, Th, Td} from 'unity-table';

const Example = () => (
  <Table>
    <Thead>
      <Tr>
        <Th>Title</Th>
        <Th>Episode number</Th>
        <Th>Release date</Th>
        <Th>Director</Th>
        <Th>Producers</Th>
      </Tr>
    </Thead>
    <Tbody>
      {data.map(planet => (
        <Tr>
          <Td>{film.title}</Td>
          <Td>{film.episode_id}</Td>
          <Td>{film.release_date}</Td>
          <Td>{film.director}</Td>
          <Td>{film.producer}</Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);
```