import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import Plain from './Plain';
import DataDecoration from './DataDecoration';
import ColumnWidths from './ColumnWidths';
import Sorting from './Sorting';

import README from './docs';

storiesOf('SimpleTable', module)
	.add('Plain', withReadme(README.normal, () => <Plain/>))
	.add('With data decoration', withReadme(README.dataDecoration, () => <DataDecoration/>))
	.add('With column widths', withReadme(README.columnWidths, () => <ColumnWidths/>))
	.add('With sorting', withReadme(README.sorting, () => <Sorting/>))
