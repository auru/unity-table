import {configure, setAddon} from '@storybook/react';
import {setOptions} from '@storybook/addon-options';
import infoAddon from '@storybook/addon-info';

setAddon(infoAddon);

setOptions({
	name: require('../package').name,
	downPanelInRight: true
});

configure(() => require('../stories'), module);
