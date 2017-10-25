import React from 'react';
import {SimpleTable} from '../../dist';
import {films as tableHead} from '../helpers/tableHead';
import {films as innerMapData} from '../helpers/mapData';
import data from '../helpers/data/films';

const columns = [
	{name: 'title'},
	{name: 'episode_id'},
	{name: 'release_date'},
	{name: 'director'}
];

const mapData = () => ({
	title: <SimpleTable
		columns={columns}
		tableHead={tableHead}
		mapData={innerMapData}
		data={data}
		keyName="title"
		/>
});

const mapAttrs = data => ({
	title: {
		colSpan: 4
	}
});

const Example = () => (
	<SimpleTable
		columns={columns}
		tableHead={tableHead}
		mapData={mapData}
		mapAttrs={mapAttrs}
		data={data}
		keyName="title"
		/>
);

export default Example;
