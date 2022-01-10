import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer E1Sy1767Ox3kHT15B8BJ4CwqPHgemPLKSK1ico8szVU2TflHUW52k0G_7KCDnWrRE4b3noehVu_LGVHrwss4KbWma7-qoiMHUSoUKPb7dvi66BEzb2REW1xrnSmRYXYx',
  },
});
