import React, {PureComponent} from 'react';
import {SimpleTable} from '../../dist';
import {films as tableHead} from '../helpers/tableHead';
import {films as mapData} from '../helpers/mapData';
import {films as sort} from '../helpers/sort';
import data from '../helpers/data/films';

const columns = [
	{name: 'title', width: '150px', sortable: true},
	{name: 'episode_id', width: '60px', sortable: true},
	{name: 'release_date', width: '70px', sortable: true},
	{name: 'director', width: '90px', sortable: true},
	{name: 'producer', width: '230px'}
];

export default class Example extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			sort: {field: 'release_date', asc: true}
		};

		this.handleSortChange = this.handleSortChange.bind(this);
	}

	handleSortChange({field, asc}) {
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
				sort={this.state.sort}
				onSortChange={this.handleSortChange}
				data={this.getSortedData()}
				keyName="title"
				/>
		);
	}
}
