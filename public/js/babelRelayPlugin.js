var getBabelRelayPlugin = require('babel-relay-plugin');

var schemaData = require('schema.json');

var plugin = getBabelRelayPlugin(schemaData);
