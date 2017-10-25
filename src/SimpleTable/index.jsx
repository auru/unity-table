import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {CLASSES} from '../constants';
import {Table, Thead, Tbody, Th, Tr, Td} from '../index';

const thClassName = (columnName, sort) => {
	const sortField = sort && sort.field;
	const sortDir = sort && sort.asc ? 'asc' : 'desc';
	const isSorting = columnName === sortField;
	return `${CLASSES.th}_sortable ${isSorting ? ` ${CLASSES.th}_sort_${sortDir}` : ''}`;
};

export default class SimpleTable extends Component {
	getHandleSortClick(field) {
		return () => {
			const {sort, onSortChange} = this.props;

			if (onSortChange) {
				if (sort && sort.field === field) {
					onSortChange({field, asc: !sort.asc});
				} else {
					onSortChange({field, asc: true});
				}
			}
		};
	}

	render () {
		const {columns, tableHead, mapData, keyName, sort, data} = this.props;
		const sortField = sort && sort.field;
		const sortDir = sort && sort.asc ? 'asc' : 'desc';
		const head = tableHead();

		return (
			<Table>
				<Thead>
					<Tr>
						{columns.map(({name, width, sortable}) => (
							<Th
								key={name}
								mix={sortable ? thClassName(name, sort) : ''}
								style={{width}}
								>
								<span
									onClick={sortable && this.getHandleSortClick(name)}
									>
									{head[name]}
								</span>
							</Th>
						))}
					</Tr>
				</Thead>
				<Tbody>
					{data && data.map((item, i) => {
						const rowData = mapData ? mapData(item) : item;
						const key = keyName ? item[keyName] : i;
						return (
							(rowData instanceof Array) ?
								rowData.map(row => (
									<Tr key={key}>
										{columns.map(({name}) => (
											<Td key={`${key}:${name}`}>{row[name]}</Td>
										))}
									</Tr>
								)) :
								<Tr key={key}>
									{columns.map(({name}) => (
										<Td key={`${key}:${name}`}>{rowData[name]}</Td>
									))}
								</Tr>
						);
					})}
				</Tbody>
			</Table>
		);
	}
}

SimpleTable.propTypes = {
	columns: PropTypes.arrayOf(           // – List of column objects
		PropTypes.shape(
			{
				name: PropTypes.string.isRequired,
				width: PropTypes.string
			}
		)
	).isRequired,
	tableHead: PropTypes.func.isRequired, // – Function that returns headings for each column {columnName: columnTitle}
	mapData: PropTypes.func,              // – Mapping function for data (Object) => Object  (default: e => e)
	keyName: PropTypes.string,            // – Name of the field which value
	                                      //   can be used for the key property (e.g. "id") (default: itteration index)
	onSortChange: PropTypes.func,         // – Sorting changed event handler. Accepts new sorting object.
	data: PropTypes.array                 // – Table data
};
