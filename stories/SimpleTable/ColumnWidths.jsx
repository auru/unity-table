import React from 'react';
import {SimpleTable} from '../../dist';
import {films as tableHead} from '../helpers/tableHead';
import {films as mapData} from '../helpers/mapData';
import data from '../helpers/data/films';

const columns = [
	{name: 'title', width: '150px'},
	{name: 'episode_id', width: '60px'},
	{name: 'release_date', width: '70px'},
	{name: 'director', width: '90px'},
	{name: 'producer', width: '230px'}
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
