require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile puppy install fat surround seat'; 
let testAccounts = [
"0x88ec044277dc5e2ae5c2f7370092ac8d22bb628dfb095b381e68a3b438386f40",
"0x4261a47282c999b1703951700e8817662eb82a6a679614778df0d459cebc8faa",
"0x81c9effb91e8db769c29cd81f9c245390ad0ad6855f997a0fbfb3616f5638c89",
"0x80686bb00dc3b4270062f78e8c323bc7173db8979f09c5bea9c6bf305b03ae8f",
"0x70e001a4eb4a7bab07aca1a69befdb8ee5de8af23e75aaf19945c803542b668c",
"0xbf9068b0b3f2d0a5f32e289277148238504edbfa623ca0517c3e56c8f027e686",
"0x61ec0576c6984c704db49abb5fc8ec97e4ea620fb4a9989160d89c378a3d1894",
"0x5a1fea0b13c259e6c6143573b498fa06accfdbf4d675e47a15bfbb720891ed95",
"0xae3a5ecdb6dcb0522ecc38254da54e4635e3585b26bf3f8e3812c3c8c94b180c",
"0x969620f79746e86180aa91e9980b56695d3c59f804abac2e18ec53cd8bf17e74"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
