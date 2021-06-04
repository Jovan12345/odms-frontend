import * as apiServer from './api-servers';

apiServer.server.listen(apiServer.port, () => console.log(`Server API mock server running on port ${apiServer.port}`))
