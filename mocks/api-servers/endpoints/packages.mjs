import * as data from '../data/package.json';

const _checkResponse = () => {
  return data.default;
}

export const packages = {
  url: 'packages',
  handler: (request, response) => {
    const responseData = _checkResponse(request);
    return responseData ? response.json(responseData) : response.status(404);
  }
};
