import {combineReducers} from 'redux';
import VideoIdReducer from './video-id-reducer';
import PlayerReducer from './player-reducer';
import CommentsReducer from './comments-reducer';

const allReducers = combineReducers({
    videos: VideoIdReducer,
    player: PlayerReducer,
    comments: CommentsReducer,
    replies: CommentsReducer,
});

export default allReducers;