import axios from 'axios';

const API = {
  async fetchLinks() {
    console.log('Fetch links in API');
    try {
      const response = await axios.get('/data/links');
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}

export default API;
