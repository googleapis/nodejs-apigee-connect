// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(parent) {
  // [START apigeeconnect_list_connections_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Parent name of the form:
   *      `projects/{project_number or project_id}/endpoints/{endpoint}`.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of connections to return. The service may return fewer
   *  than this value. If unspecified, at most 100 connections will be returned.
   *  The maximum value is 1000; values above 1000 will be coerced to 1000.
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous `ListConnections` call.
   *  Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to `ListConnections` must
   *  match the call that provided the page token.
   */
  // const pageToken = 'abc123'

  // Imports the Apigeeconnect library
  const {ConnectionServiceClient} = require('@google-cloud/apigee-connect').v1;

  // Instantiates a client
  const apigeeconnectClient = new ConnectionServiceClient();

  async function listConnections() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await apigeeconnectClient.listConnectionsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  listConnections();
  // [END apigeeconnect_list_connections_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
