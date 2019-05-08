import {combineReducers} from 'redux';

import ui from './ui';
import counter from './counter';

const reducers = combineReducers({
    counter, ui
});

export default reducers;
