# fantasygoldjs-lib
This is an extend lib for bitcoinjs-lib.
It extends the network type of bitcoinjs-lib.
It also provides an useful lib to help you building FGC transactions.

## Installation
``` bash
npm install fantasygoldjs-lib
```

## Setup
### Node.js
``` javascript
var fantasygoldjs = require('fantasygoldjs-lib')
```

## New features
### Network
```
{
    fantasygold: {
        messagePrefix: '\x18FantasyGold Signed Message:\n',
        bech32: 'fg',
        bip32: {
            public: 0x08B8D23E,
            private: 0x02A7F14B
        },
        pubKeyHash: 0x23,
        scriptHash: 0x26,
        wif: 0x8a
    },
    fantasygold_testnet: {
        messagePrefix: '\x18FantasyGold Signed Message:\n',
        bech32: 'tf',
        bip32: {
            public: 0x0845C3F8,
            private: 0x03654388
        },
        pubKeyHash: 0x5f,
        scriptHash: 0x58,
        wif: 0x8c
    }
}

```

### Utils
#### Utils.selectTxs
```javascript
/**
 * This is a function for selecting FGC utxos to build transactions
 * the transaction object takes at least 3 fields, value(unit is 1e-8 FGC) , confirmations and isStake
 *
 * @param [transaction] unspentTransactions
 * @param Number amount(unit: FGC)
 * @param Number fee(unit: FGC)
 * @returns [transaction]
 */
function selectTxs(unspentTransactions, amount, fee)
```
#### Utils.buildPubKeyHashTransaction
```javascript
/**
 * This is a helper function to build a pubkeyhash transaction
 * the transaction object takes at least 5 fields, value(unit is 1e-8 FGC), confirmations, isStake, hash and pos
 *
 * @param bitcoinjs-lib.KeyPair keyPair
 * @param String to
 * @param Number amount(unit: FGC)
 * @param Number fee(unit: FGC)
 * @param [transaction] utxoList
 * @returns String the built tx
 */
function buildPubKeyHashTransaction(keyPair, to, amount, fee, utxoList)
```
#### Utils.buildCreateContractTransaction
```javascript
/**
 * This is a helper function to build a create-contract transaction
 * the transaction object takes at least 5 fields, value(unit is 1e-8 FGC), confirmations, isStake, hash and pos
 *
 * @param bitcoinjs-lib.KeyPair keyPair
 * @param String code The contract byte code
 * @param Number gasLimit
 * @param Number gasPrice(unit: 1e-8 FGC/gas)
 * @param Number fee(unit: FGC)
 * @param [transaction] utxoList
 * @returns String the built tx
 */
function buildCreateContractTransaction(keyPair, code, gasLimit, gasPrice, fee, utxoList)
```
#### Utils.buildSendToContractTransaction
```javascript
/**
 * This is a helper function to build a send-to-contract transaction
 * the transaction object takes at least 5 fields, value(unit is 1e-8 FGC), confirmations, isStake, hash and pos
 *
 * @param bitcoinjs-lib.KeyPair keyPair
 * @param String contractAddress The contract address
 * @param String encodedData The encoded abi data
 * @param Number gasLimit
 * @param Number gasPrice(unit: 1e-8 FGC/gas)
 * @param Number fee(unit: FGC)
 * @param [transaction] utxoList
 * @returns String the built tx
 */
function buildSendToContractTransaction(keyPair, contractAddress, encodedData, gasLimit, gasPrice, fee, utxoList)
```
