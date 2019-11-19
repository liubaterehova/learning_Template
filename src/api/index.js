import makeCustomApi from './customApi';

export const makeApi = (dependencies = {}) => ({
  auth: makeCustomApi(dependencies),
});

export default makeApi;
