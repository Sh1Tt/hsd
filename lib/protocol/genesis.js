// Autogenerated, do not edit.

'use strict';

const data = require('./genesis-data.json');
const genesis = exports;

/*
 * Main
 */

genesis.main = {
  version: 0,
  hash: '3d1f2faf3b9f05440ff32240c6fd6b4a3711bd3de1633cde786abea8b5d379c0',
  prevBlock: '0000000000000000000000000000000000000000000000000000000000000000',
  merkleRoot:
    '1718ec6e4b526f4b5b589e5d966732d520b672c454e45017d123ada2d1b1becd',
  witnessRoot:
    'c1c62d74387b579c7ce26ebc80cf7233951e8323f2c0b2478630ea6aa5d17f9b',
  trieRoot:
    '03170a2e7597b7b7e3d84c05391d139a62b157e78786d8c082f29dcf4c111314',
  time: 1514765688,
  bits: 0x1f07ffff,
  nonce: Buffer.from('0000000000000000000000000000000000000000', 'hex'),
  solution: new Uint32Array([
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000
  ]),
  height: 0
};

genesis.mainData = Buffer.from(data.main, 'base64');

/*
 * Testnet
 */

genesis.testnet = {
  version: 0,
  hash: '8f0297460c47d1cd6289509583c86dfd38d3d5318ed844138ced1aea7d0f4898',
  prevBlock: '0000000000000000000000000000000000000000000000000000000000000000',
  merkleRoot:
    '21c8fba40b3d49ea68a98045e92c57cd744370d751b956fb1a02dec204c89c46',
  witnessRoot:
    'd8394008e2a75f1011d552929eb5c41220b3a6e633c09614b61f9593628f1651',
  trieRoot:
    '03170a2e7597b7b7e3d84c05391d139a62b157e78786d8c082f29dcf4c111314',
  time: 1514765689,
  bits: 0x2007ffff,
  nonce: Buffer.from('0000000000000000000000000000000000000000', 'hex'),
  solution: new Uint32Array([
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000
  ]),
  height: 0
};

genesis.testnetData = Buffer.from(data.testnet, 'base64');

/*
 * Regtest
 */

genesis.regtest = {
  version: 0,
  hash: '82121c6010c1edc22e155538ffaa7541c95825cc1bb300338c9612499313edbb',
  prevBlock: '0000000000000000000000000000000000000000000000000000000000000000',
  merkleRoot:
    'd3753a3b232cb31565c762511ace9e566f49fc65259315637627e4065385d766',
  witnessRoot:
    '65a48ff696a1f2b23acb71ece851e0425d67b19d065b50b57ab7d44e4e64966b',
  trieRoot:
    '03170a2e7597b7b7e3d84c05391d139a62b157e78786d8c082f29dcf4c111314',
  time: 1514765690,
  bits: 0x207fffff,
  nonce: Buffer.from('0000000000000000000000000000000000000000', 'hex'),
  solution: new Uint32Array([
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000
  ]),
  height: 0
};

genesis.regtestData = Buffer.from(data.regtest, 'base64');

/*
 * Simnet
 */

genesis.simnet = {
  version: 0,
  hash: '4333fc9dfec33bfc44ce832f575f742c3f04044327f2790bde4859ab02a2423e',
  prevBlock: '0000000000000000000000000000000000000000000000000000000000000000',
  merkleRoot:
    'bea3f90396340e62abf71cf9a90de7b19387f8db31f30f15674b99101ffc70f1',
  witnessRoot:
    'ad7ac2dddadc87b57272c71f8a2f5c049966473d38ca407984a8a1d8aaaec36e',
  trieRoot:
    '03170a2e7597b7b7e3d84c05391d139a62b157e78786d8c082f29dcf4c111314',
  time: 1514765691,
  bits: 0x207fffff,
  nonce: Buffer.from('0000000000000000000000000000000000000000', 'hex'),
  solution: new Uint32Array([
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000
  ]),
  height: 0
};

genesis.simnetData = Buffer.from(data.simnet, 'base64');