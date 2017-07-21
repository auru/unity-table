import React, {createElement} from 'react';
import SimpleTable from './SimpleTable';
import {CLASSES} from './constants';
import './styles.css';

const mixClassNames = (...args) => args.join('');
const createComponentWithTag = (tag, cssClass) => {
	const component = ({className, mix, ...rest}) => createElement(tag, {
		...rest,
		className: mixClassNames(cssClass, (className ? ` ${className}` : ''), (mix ? ` ${mix}` : ''))
	});

	component.displayName = `UnityTable.${tag[0].toUpperCase()}${tag.slice(1)}`;

	return component;
};

const Table = createComponentWithTag('table', CLASSES.table);
const Thead = createComponentWithTag('thead', CLASSES.thead);
const Tbody = createComponentWithTag('tbody', CLASSES.tbody);
const Th =    createComponentWithTag('th', CLASSES.th);
const Tr =    createComponentWithTag('tr', CLASSES.tr);
const Td =    createComponentWithTag('td', CLASSES.td);

export {
	Table,
	Thead,
	Th,
	Tbody,
	Tr,
	Td,
	SimpleTable
};
