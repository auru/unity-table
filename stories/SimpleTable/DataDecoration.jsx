import React from 'react';
import {SimpleTable} from '../../dist';
import {films as tableHead} from '../helpers/tableHead';
import {films as mapData} from '../helpers/mapData';
import data from '../helpers/data/films';

const columns = [
	{name: 'title'},
	{name: 'episode_id'},
	{name: 'release_date'},
	{name: 'director'},
	{name: 'producer'}
];

const Example = () => (
	<SimpleTable
		columns={columns}
		tableHead={tableHead}
		mapData={mapData}
		data={data}
		keyName="title"
		/>
);

export default Example;
