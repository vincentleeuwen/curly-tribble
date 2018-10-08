import axios from 'axios';
import ServerActions from './actions/ServerActions';

const API = {
  async fetchLinks() {
    try {
      const response = await axios.post('/graphql/', {
        query: `{
          links {
            url,
            title,
            _id
          }
        }`
      });
      console.log('In api:');
      console.log(response.data);
      ServerActions.receiveLinks(response.data.data.links);
    } catch (error) {
      console.error(error);
    }
  }
}

export default API;
