// Import dependencies
import express from 'express';
import cors from 'cors';

// Get endpoints handlers
import * as ep from './endpoints/index';

// Initialise the server
const server = express(),
  port = 8082,
  API_PREFIX = 'api',
  API_SUFFIX = '',
  API_VERSION = 'v1',
  urlPrefix = `/${API_PREFIX}`
    + `${API_SUFFIX ? `/${API_SUFFIX}` : ''}`
    + `${API_VERSION ? `/${API_VERSION}` : ''}`;

// Enable allow headers
server.use(cors());
server.use(express.urlencoded({extended: true}));
server.use(express.json());

// Get packages
server.get(`${urlPrefix}/${ep.packages.url}`, ep.packages.handler);

// Get shipments
server.get(`${urlPrefix}/${ep.shipments.url}`, ep.shipments.handler);

// Export server
export {
  server,
  port
};
