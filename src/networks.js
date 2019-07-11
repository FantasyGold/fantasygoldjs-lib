module.exports = {
    fantasygold: {
        messagePrefix: '\x15FantasyGold Signed Message:\n',
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
        messagePrefix: '\x15FantasyGold Signed Message:\n',
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
