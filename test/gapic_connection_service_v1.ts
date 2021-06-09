// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as connectionserviceModule from '../src';

import {PassThrough} from 'stream';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (instance.constructor as typeof protobuf.Message).toObject(
    instance as protobuf.Message<T>,
    {defaults: true}
  );
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

function stubPageStreamingCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  const pagingStub = sinon.stub();
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      pagingStub.onCall(i).callsArgWith(2, null, responses[i]);
    }
  }
  const transformStub = error
    ? sinon.stub().callsArgWith(2, error)
    : pagingStub;
  const mockStream = new PassThrough({
    objectMode: true,
    transform: transformStub,
  });
  // trigger as many responses as needed
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      setImmediate(() => {
        mockStream.write({});
      });
    }
    setImmediate(() => {
      mockStream.end();
    });
  } else {
    setImmediate(() => {
      mockStream.write({});
    });
    setImmediate(() => {
      mockStream.end();
    });
  }
  return sinon.stub().returns(mockStream);
}

function stubAsyncIterationCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  let counter = 0;
  const asyncIterable = {
    [Symbol.asyncIterator]() {
      return {
        async next() {
          if (error) {
            return Promise.reject(error);
          }
          if (counter >= responses!.length) {
            return Promise.resolve({done: true, value: undefined});
          }
          return Promise.resolve({done: false, value: responses![counter++]});
        },
      };
    },
  };
  return sinon.stub().returns(asyncIterable);
}

describe('v1.ConnectionServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      connectionserviceModule.v1.ConnectionServiceClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      connectionserviceModule.v1.ConnectionServiceClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = connectionserviceModule.v1.ConnectionServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new connectionserviceModule.v1.ConnectionServiceClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new connectionserviceModule.v1.ConnectionServiceClient({
      fallback: true,
    });
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new connectionserviceModule.v1.ConnectionServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.connectionServiceStub, undefined);
    await client.initialize();
    assert(client.connectionServiceStub);
  });

  it('has close method', () => {
    const client = new connectionserviceModule.v1.ConnectionServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new connectionserviceModule.v1.ConnectionServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
    const result = await client.getProjectId();
    assert.strictEqual(result, fakeProjectId);
    assert((client.auth.getProjectId as SinonStub).calledWithExactly());
  });

  it('has getProjectId method with callback', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new connectionserviceModule.v1.ConnectionServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon
      .stub()
      .callsArgWith(0, null, fakeProjectId);
    const promise = new Promise((resolve, reject) => {
      client.getProjectId((err?: Error | null, projectId?: string | null) => {
        if (err) {
          reject(err);
        } else {
          resolve(projectId);
        }
      });
    });
    const result = await promise;
    assert.strictEqual(result, fakeProjectId);
  });

  describe('listConnections', () => {
    it('invokes listConnections without error', async () => {
      const client = new connectionserviceModule.v1.ConnectionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.apigeeconnect.v1.ListConnectionsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.apigeeconnect.v1.Connection()
        ),
        generateSampleMessage(
          new protos.google.cloud.apigeeconnect.v1.Connection()
        ),
        generateSampleMessage(
          new protos.google.cloud.apigeeconnect.v1.Connection()
        ),
      ];
      client.innerApiCalls.listConnections = stubSimpleCall(expectedResponse);
      const [response] = await client.listConnections(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listConnections as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listConnections without error using callback', async () => {
      const client = new connectionserviceModule.v1.ConnectionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.apigeeconnect.v1.ListConnectionsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.apigeeconnect.v1.Connection()
        ),
        generateSampleMessage(
          new protos.google.cloud.apigeeconnect.v1.Connection()
        ),
        generateSampleMessage(
          new protos.google.cloud.apigeeconnect.v1.Connection()
        ),
      ];
      client.innerApiCalls.listConnections = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.listConnections(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.apigeeconnect.v1.IConnection[] | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listConnections as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes listConnections with error', async () => {
      const client = new connectionserviceModule.v1.ConnectionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.apigeeconnect.v1.ListConnectionsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.listConnections = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.listConnections(request), expectedError);
      assert(
        (client.innerApiCalls.listConnections as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listConnectionsStream without error', async () => {
      const client = new connectionserviceModule.v1.ConnectionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.apigeeconnect.v1.ListConnectionsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.apigeeconnect.v1.Connection()
        ),
        generateSampleMessage(
          new protos.google.cloud.apigeeconnect.v1.Connection()
        ),
        generateSampleMessage(
          new protos.google.cloud.apigeeconnect.v1.Connection()
        ),
      ];
      client.descriptors.page.listConnections.createStream = stubPageStreamingCall(
        expectedResponse
      );
      const stream = client.listConnectionsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.apigeeconnect.v1.Connection[] = [];
        stream.on(
          'data',
          (response: protos.google.cloud.apigeeconnect.v1.Connection) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      const responses = await promise;
      assert.deepStrictEqual(responses, expectedResponse);
      assert(
        (client.descriptors.page.listConnections.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listConnections, request)
      );
      assert.strictEqual(
        (client.descriptors.page.listConnections
          .createStream as SinonStub).getCall(0).args[2].otherArgs.headers[
          'x-goog-request-params'
        ],
        expectedHeaderRequestParams
      );
    });

    it('invokes listConnectionsStream with error', async () => {
      const client = new connectionserviceModule.v1.ConnectionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.apigeeconnect.v1.ListConnectionsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedError = new Error('expected');
      client.descriptors.page.listConnections.createStream = stubPageStreamingCall(
        undefined,
        expectedError
      );
      const stream = client.listConnectionsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.apigeeconnect.v1.Connection[] = [];
        stream.on(
          'data',
          (response: protos.google.cloud.apigeeconnect.v1.Connection) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      await assert.rejects(promise, expectedError);
      assert(
        (client.descriptors.page.listConnections.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listConnections, request)
      );
      assert.strictEqual(
        (client.descriptors.page.listConnections
          .createStream as SinonStub).getCall(0).args[2].otherArgs.headers[
          'x-goog-request-params'
        ],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with listConnections without error', async () => {
      const client = new connectionserviceModule.v1.ConnectionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.apigeeconnect.v1.ListConnectionsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.apigeeconnect.v1.Connection()
        ),
        generateSampleMessage(
          new protos.google.cloud.apigeeconnect.v1.Connection()
        ),
        generateSampleMessage(
          new protos.google.cloud.apigeeconnect.v1.Connection()
        ),
      ];
      client.descriptors.page.listConnections.asyncIterate = stubAsyncIterationCall(
        expectedResponse
      );
      const responses: protos.google.cloud.apigeeconnect.v1.IConnection[] = [];
      const iterable = client.listConnectionsAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (client.descriptors.page.listConnections
          .asyncIterate as SinonStub).getCall(0).args[1],
        request
      );
      assert.strictEqual(
        (client.descriptors.page.listConnections
          .asyncIterate as SinonStub).getCall(0).args[2].otherArgs.headers[
          'x-goog-request-params'
        ],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with listConnections with error', async () => {
      const client = new connectionserviceModule.v1.ConnectionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.apigeeconnect.v1.ListConnectionsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedError = new Error('expected');
      client.descriptors.page.listConnections.asyncIterate = stubAsyncIterationCall(
        undefined,
        expectedError
      );
      const iterable = client.listConnectionsAsync(request);
      await assert.rejects(async () => {
        const responses: protos.google.cloud.apigeeconnect.v1.IConnection[] = [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (client.descriptors.page.listConnections
          .asyncIterate as SinonStub).getCall(0).args[1],
        request
      );
      assert.strictEqual(
        (client.descriptors.page.listConnections
          .asyncIterate as SinonStub).getCall(0).args[2].otherArgs.headers[
          'x-goog-request-params'
        ],
        expectedHeaderRequestParams
      );
    });
  });

  describe('Path templates', () => {
    describe('endpoint', () => {
      const fakePath = '/rendered/path/endpoint';
      const expectedParameters = {
        project: 'projectValue',
        endpoint: 'endpointValue',
      };
      const client = new connectionserviceModule.v1.ConnectionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.endpointPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.endpointPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('endpointPath', () => {
        const result = client.endpointPath('projectValue', 'endpointValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.endpointPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromEndpointName', () => {
        const result = client.matchProjectFromEndpointName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.endpointPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchEndpointFromEndpointName', () => {
        const result = client.matchEndpointFromEndpointName(fakePath);
        assert.strictEqual(result, 'endpointValue');
        assert(
          (client.pathTemplates.endpointPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
