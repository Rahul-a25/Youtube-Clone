import axios from 'axios'

const  getdetailRight = async (detailRight,SetdetailRight) => {
    const options = {
        method: 'GET',
        url: 'https://imdb-top-100-movies.p.rapidapi.com/',
        headers: {
          'X-RapidAPI-Key': 'f41c2f25b7mshbb2475314b3780ep1e9f08jsn34f500ddbe3f',
          'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          SetdetailRight(response.data);
          console.log(detailRight);
      } catch (error) {
          console.error(error);
      }
};
export default getdetailRight;