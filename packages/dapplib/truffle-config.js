require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half enter blue tooth notice rival smile purse install fantasy flush segment'; 
let testAccounts = [
"0x18b6089d585a67036eed037b2431a38ec87e2e8ccf7e62d4c1d9c6d992ef30a0",
"0x276f037422c4467ba0c43905e45b634e18bdc084da9f066f6dd5482d5dc66ef7",
"0xe5e9d3c4412855ac28d7dfcf8a276399dacc8028ce6102bd4d43d21edd0d7625",
"0x8c378c732ca4aa0a9d41981874a6d473f3e96e12860db5878239d0ee8370d106",
"0x14e1d7b0ad3485a880a1019d39689d27787b59625f444c228e7a26c1064bae9d",
"0xbdd0b9b7af0ba6784c68f1b3a31ef27f9aeba55d3eb0850b157ce5a224c48f87",
"0xca9b3048600596284b1e466aab112b7f59cce1698998d8faf1f66d5e1d9d6613",
"0x9e3a9c378d301b96ae9dc8a1cccff1925314715993ab5894fb2411157a6c23bf",
"0x3ce5ea3c3ba8060865c95f6ab20ef22ce5a78159017446df8b52d7b6d017c67c",
"0xb6bdcf133c03e6d9a7b696f43c5bc7bb0c191ef036d0d13896f79ca6adaa223c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
