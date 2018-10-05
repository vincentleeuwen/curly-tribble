import axios from 'axios';
import ServerActions from './actions/ServerActions';

const API = {
  async fetchLinks() {
    console.log('Fetch links in API');
    try {
      const response = await axios.get('/data/links');
      ServerActions.receiveLinks(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}

export default API;
