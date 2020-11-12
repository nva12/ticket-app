import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // we are on the server
    return axios.create({
      baseURL:
        'http://nginx-ingress-1604731935-controller.default.svc.cluster.local',
      headers: req.headers,
    });
  } else {
    // we are on the client
    return axios.create({
      baseURL: '/',
    });
  }
};
