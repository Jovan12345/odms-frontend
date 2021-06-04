import * as data from '../data/shipment.json';

const _checkResponse = () => {
  return data.default;
}

export const shipments = {
  url: 'shipments',
  handler: (request, response) => {
    const responseData = _checkResponse(request);
    return responseData ? response.json(responseData) : response.status(404);
  }
};
