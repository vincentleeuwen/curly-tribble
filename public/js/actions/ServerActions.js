import AppDispatcher from '../Dispatcher';
import { ActionTypes } from '../Constants';

const ServerActions = {
  receiveLinks(links) {
    console.log('2. in Server actions');
    console.log(links);

    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_LINKS,
      links
    })
  }
}

export default ServerActions;