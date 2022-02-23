const sha256 = require('sha256');
const currentNodeUrl = process.argv[3];
const uuid = require('uuid/v1'); 
const EC = require('elliptic').ec;
const publicKey = '';

const publicKeys = [];
function Blockchain() {
	
    this.chain = [];
    this.pendingTransaction = [];
    this.currentNodeUrl = currentNodeUrl;
    this.networkNodes = [];
    //Genesis block (first block in block chain with arbitrary values)
    this.createNewBlock(publicKey,"",0,"GD",19119104101);
}

//create a new block 
Blockchain.prototype.createNewBlock = function (nounce,previousHash,currentHash) {
    const newBlock = {
        index: this.chain.length + 1,
        date : Date.now(),
        transaction : this.pendingTransaction,
        nounce : nounce,
        hash : currentHash,
        previousHash : previousHash
    };

    this.pendingTransaction = [];
    this.chain.push(newBlock);

    return newBlock;
}

//get the last created block
Blockchain.prototype.getLastBLock = function () {
    return this.chain[this.chain.length - 1];
}

Blockchain.prototype.createNewTransaction = function (sender, nnet,timescale,recipient,amount) {
    const transactionObj = {
		
        sender : sender,
		nnet : nnet,
		timescale : timescale,
        recipient : recipient,
		
        amount : amount,
        transactionId : uuid().split('-').join('')
    };
    
    return transactionObj;
}

Blockchain.prototype.addTransactionToPendingTransaction = function(transactionObj) {
    this.pendingTransaction.push(transactionObj);
    return this.getLastBLock()['index'] + 1;
};

Blockchain.prototype.createHashBlock = function (previousHash,currentBlockData,nounce) {
	const dataString = previousHash + nounce.toString() + JSON.stringify(currentBlockData);
	const hash = sha256(dataString);
	return hash;
}

Blockchain.prototype.proofOfWork = function (previousHash,currentBlockData) {
    let nounce = 0;
    let hash = this.createHashBlock(previousHash,currentBlockData,nounce);
    while(hash.substring(0,4) !== '0000') {
        nounce++;
        hash = this.createHashBlock(previousHash,currentBlockData,nounce);  
    }
    return nounce;
}

Blockchain.prototype.chainIsValid = function(blockchain) {
        let validChain = true;
    for(let i=1;i<blockchain.length;i++) {
        const currentBlock = blockchain[i];
        const previousBlock = blockchain[i-1];
        const blockHash = this.createHashBlock(previousBlock['hash'], { transaction: currentBlock['transaction'], index: currentBlock['index'] }, currentBlock['nounce']);
        //if (blockHash.substring(0,4) !== '0000') validChain = false;
       if (currentBlock['previousHash'] !== previousBlock['hash'] ) validChain = false;
       console.log(previousBlock['hash'] + "=>" + currentBlock['previousHash'] + "\n");
    }

    const genesisBlock = blockchain[0];
    const correctNounce = genesisBlock['nounce'] === 100;
    const correctPreviousBlockHash = genesisBlock['previousHash'] === 0;
    const correctHash = genesisBlock['hash'] === 0;
    const correctTransaction = genesisBlock['{'+publicKey+',"",0,"GD",19119104101 }'].length === 0;
    
    if (!correctHash && !correctNounce && !correctPreviousBlockHash && !correctTransaction) validChain = false;

    return validChain;
}

Blockchain.prototype.getBlock = function (blockhash) {
    let correctBlock = null;
    this.chain.forEach(block => {
        if(block.hash === blockhash) {
            correctBlock = block;
        }
    });
    return correctBlock;

}

Blockchain.prototype.getTransactionId = function (transactionId) {
    let correctBlock = null;
    let correctTransaction = null;
    this.chain.forEach(blocks => {
        blocks.transaction.forEach(transaction => {
            if(transaction.transactionId === transactionId) {
                correctBlock = blocks;
                correctTransaction = transaction;
            }
        });
    });

    return {
        transaction : correctTransaction,
        block : correctBlock
    };
}


Blockchain.prototype.getBFGId = function (BFGF) {
	
function T(branchT) {
  return branchT == transactionId;
}
	let k = null;
    let correctBlock = null;
    let correctTransaction = null;
    this.chain.forEach(blocks => {
        blocks.transaction.forEach(transaction => {
            if(transaction.transactionId === BFGiD) {
				k = BFG.findIndex(T);
                correctBlock = blocks;
                correctTransaction = transaction;
            }
        });
    });

    return {
        transaction : correctTransaction,
        block : correctBlock
    };
}










Blockchain.prototype.getAddress = function (address) {
    let addressArray = [];
    this.chain.forEach(blocks => {
        blocks.transaction.forEach(transaction => {
            if(transaction.sender === address || transaction.recipient === address) {
                addressArray.push(transaction);
            }
        });
    });

    let Balance = Number('');
    addressArray.forEach(transaction => {
        if (transaction.sender === address) Balance -= transaction.amount;
        else if(transaction.recipient === address) Balance += transaction.amount;
    });
    
    return {
        address : addressArray,
        balance : Balance
    };
}
    

module.exports = Blockchain; 

