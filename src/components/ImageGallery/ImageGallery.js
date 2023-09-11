import axios from 'axios';
const url = `https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12`;
const options = {
  params: {
    key: `38416277-2f3b74029dfd524974848f805`,
    q: `cat`,
    image_type: `photo`,
    orientation: `horizontal`,
    safesearch: `true`,
    per_page: 12,
    page: 1,
  },
};

export const fetchImages = () => {
  const response = axios.get(url, options);
  return response.data;
};

console.log(fetchImages);
