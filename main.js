const {Blockchain, Transaction} = require('./src/blockchain');

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');


const mykey = ec.keyFromPrivate('108777dc593caba4c681016fb8957b880e61e9b1739865a2c03cdb4a4a5b9a9e');
const myWalletAdress = mykey.getPublic('hex');

let WorldCoin = new Blockchain();

const tx1 = new Transaction(myWalletAdress,'public key goes here',10);
tx1.signTransaction(mykey);
WorldCoin.addTransaction(tx1);

console.log('\n Starting the miner...');

WorldCoin.minePendingTransactions(myWalletAdress);

console.log('\n Balance of James is ',WorldCoin.getBalanceOfAdress(myWalletAdress));

console.log('is chain valid ?',WorldCoin.isChainValid());

