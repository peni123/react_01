import {combineReducers} from 'redux';
import UserReducer from './user-reducer';
import VideoIdReducer from './video-id-reducer';
import PlayerReducer from './player-reducer';
import CommentsReducer from './comments-reducer';

const allReducers = combineReducers({
    users: UserReducer,
    videos: VideoIdReducer,
    player: PlayerReducer,
    comments: CommentsReducer
});

export default allReducers;