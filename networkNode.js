const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const uuid = require('uuid/v1');
const port = process.argv[2];
const rp = require('request-promise');
var BFGData =[];
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
var kb = 0;
var k = 0;
var BFGId= uuid().split('-').join('');
	  
var keys= ec.genKeyPair(),
	  publicKey = keys.getPublic('hex');
	  console.log(`Your public Address: ${publicKey}`);
	   privateKey = keys.getPrivate('hex');
	   
	  console.log(`Your Private Mneumonic: ${privateKey}`);
	   
// Generate a new key pair and convert them to hex-strings
const zED =   new Blockchain();
const BFG = [BFGId, zED];
var express = require('express');
var app = express();
newset();





	function chainF(branchB) {
		
		
		
		
		
  return branchB ==  BFGId;
}




chainG = chainSpawn(BFGData);


  function chainSpawn (){
  ////////////////
  newset();
  ///////////////
	   	var k = BFG.findIndex(treeA);
	var BFGId = BFG[kb-1];

	function treeA(BFGId) {
  return {
  BFGData: BFG[kb-2],
  BFGId: BFG[kb-1]
  };
}
  }

var nodeAddress = publicKey;

function newset(publicKeyss,publicKeys,privateKeys){
	
var keyss= ec.genKeyPair(),
	  publicKeyss = keyss.getPublic('hex');
	  console.log(`Your public Address: ${publicKey}`);
	   privateKeyss = keyss.getPrivate('hex');
	   
	  console.log(`Your Private Mneumonic: ${privateKey}`);
	  
	   publicKeys = new Blockchain();
	
	kb = kb+3;
	   
	   
	   
     BFG.push(kb,publicKeyss, publicKeys);
return publicKeyss,privateKeys,publicKeys;
}
////////////////
/////////////


var cors = require('cors')


app.use(cors());

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

//Routes
app.get('/blockchain',function(req,res) {
	res.send(zED);
});

//Routes
app.get('/blockchain'+'/:kb',function(req,res) {
	
	var k = BFG.findIndex(treeB);
	const BFGId = req.params.BFGId;
	var BFGData = BFG[kb-2];
	function treeB(branchB) {
  return branchB ==  BFGId;
}
	res.send(BFGData);
});


app.post('/transaction' , cors(corsOptions), function (req,res) {
	const pendingTransaction = zED.createNewTransaction(req.body.sender,req.body.nnet, req.body.timescale,req.body.recipient,req.body.amount);
	zED.addTransactionToPendingTransaction(pendingTransaction);
	res.json({ note : 'transaction successfully added'});
});


app.post('/:kb'+'/transaction' , cors(corsOptions), function (req,res) {
k = BFG.findIndex[chainF(BFGId)];
chainG = BFG[kb-2];
	const pendingTransaction = chainG.createNewTransaction(req.body.sender,req.body.nnet, req.body.timescale,req.body.recipient,req.body.amount);
	chainG.addTransactionToPendingTransaction(pendingTransaction);
	res.json({ note : 'transaction successfully added'});
});



app.post('/:kb'+'/transaction' , cors(corsOptions), function (req,res) {
	
k = BFG.findIndex[chainF(BFGId)];
chainG = BFG[kb-2];
	const pendingTransaction = chainG.createNewTransaction(req.body.sender,req.body.nnet, req.body.timescale,req.body.recipient,req.body.amount);
	chainG.addTransactionToPendingTransaction(pendingTransaction);
	res.json({ note : 'transaction successfully added'});
});

app.post('/chain' , cors(corsOptions), function (req,res) {




	const pendingTransaction = zED.createNewTransaction(req.body.sender,req.body.nnet, req.body.timescale);
	zED.addTransactionToPendingTransaction(pendingTransaction);
	res.json({ note : 'Branch successfully added'});
});




app.post('/:kb'+'/chainNnet' , cors(corsOptions), function (req,res) {
	
k = BFG.findIndex[chainF(BFGId)];
chainG = BFG[kb-2];
	const pendingTransaction = chainG.createNewTransaction(req.body.sender,req.body.nnet, req.body.timescale);
	chainG.addTransactionToPendingTransaction(pendingTransaction);
	res.json({ note : 'Branch successfully added'});
});




app.post('/chainNnet/broadcast' , cors(corsOptions), function (req,res) {
	newset();
	const transaction = zED.createNewTransaction(req.body.sender, req.body.nnet, req.body.timescale);
	zED.addTransactionToPendingTransaction(transaction);
	const registerBulk = [];
	zED.networkNodes.forEach(networkNodeUrl => {
		const requestOptions = {
			uri : networkNodeUrl + '/chainNnet',
			method:'POST',
			body : transaction,
			json : true
		};
		registerBulk.push(rp(requestOptions));
		
	
	});
	Promise.all(registerBulk)
	.then(data => {
	
		res.json({ note : 'Transaction successfully Branched @ '+publicKeyss+'    //Mneumonic Private:=/ '+privateKeyss});
		
	})
	.catch(error => {
		res.send(error);
	});
});

app.post('/:kb'+'/chainNnet/broadcast' , cors(corsOptions), function (req,res) {
	
	newset();
	
k = BFG.findIndex[chainF(BFGId)];
chainG = BFG[kb-2];
	const transaction = chainG.createNewTransaction(req.body.sender, req.body.nnet, req.body.timescale);
	chainG.addTransactionToPendingTransaction(transaction);
		const registerBulk = [];
	chainG.networkNodes.forEach(networkNodeUrl => {
		const requestOptions = {
			uri : networkNodeUrl + '/chainNnet',
			method:'POST',
			body : transaction,
			json : true
		};
		registerBulk.push(rp(requestOptions));
	});
	Promise.all(registerBulk)
	.then(data => {
		res.json({ note : 'Transaction successfully Branched @ '+BFG[kb-2]+'    //Mneumonic Private:=/ '+privateKeyss});
	})
	.catch(error => {
		res.send(error);
	});
});






app.post('/:kb'+'/transaction/broadcast' , cors(corsOptions), function (req,res) {
k = BFG.findIndex[chainF(BFGId)];
chainG = BFG[kb-2];







	const transaction = chainG.createNewTransaction(req.body.sender,req.body.nnet, req.body.timescale,req.body.recipient,req.body.amount);
	chainG.addTransactionToPendingTransaction(transaction);
	
	const registerBulk = [];
	chainG.networkNodes.forEach(networkNodeUrl => {
		const requestOptions = {
			uri : networkNodeUrl + '/:kb'+'/transaction',
			method:'POST',
			body : transaction,
			json : true
		};
		registerBulk.push(rp(requestOptions));
	});
	Promise.all(registerBulk)
	.then(data => {
		res.json({ note : 'Transaction successfully broadcasted'});
	})
	.catch(error => {
		res.send(error);
	});
});


app.post('/transaction/broadcast' , cors(corsOptions), function (req,res) {
	const transaction = zED.createNewTransaction(req.body.sender,req.body.nnet, req.body.timescale,req.body.recipient,req.body.amount);
	zED.addTransactionToPendingTransaction(transaction);
	
	const registerBulk = [];
	zED.networkNodes.forEach(networkNodeUrl => {
		const requestOptions = {
			uri : networkNodeUrl + '/transaction',
			method:'POST',
			body : transaction,
			json : true
		};
		registerBulk.push(rp(requestOptions));
	});
	Promise.all(registerBulk)
	.then(data => {
		res.json({ note : 'Transaction successfully broadcasted'});
	})
	.catch(error => {
		res.send(error);
	});
});
app.post('/chainNnet' , cors(corsOptions), function (req,res) {
		//getting the last block
	const lastBlock = zED.getLastBLock();


	const previousBlockHash = lastBlock['hash'];
	const currentBlockData = {
		transaction : zED.pendingTransactions,
		index : lastBlock['index'] + 1
	};

	const nonce = zED.proofOfWork(previousBlockHash,currentBlockData);
	const currentBlockHash = zED.createHashBlock(previousBlockHash,currentBlockData,nonce);

	//creating a new block and adding it to chain
	const newBlock = zED.createNewBlock(nonce,previousBlockHash,currentBlockHash);

		
	const requestPromise = [];
	zED.networkNodes.forEach(networkNodeUrl => {
		const registerOptionss = {
			uri:networkNodeUrl + '/:kb'+'/receive-new-chain',
			method:'POST',
			body : {newBlock : newBlock },
			json:true
		};
    j = nodeAddress;
		requestPromise.push(rp(registerOptionss));
	 
	});
	
		newset();
		

k = BFG.findIndex[chainF(BFGId)];
chainG = BFG[kb-2];
	Promise.all(requestPromise)
	.then(data => {
		const registerOptionss = {
			uri: zED.currentNodeUrl + '/chainNnet/broadcast',
			method: 'POST',
			body: {
            	sender : nodeAddress,
				nnet: 0,
				timescale: (parseInt(zED.chain.length)/2*3.14/180)
				
			},
			json:true
		};
    
		return rp(registerOptions);	
	})
	.then(data => {
		res.json({
			note : 'New block successfully Chained '+ '#'+BFG[kb-1]+'CONFIDENTIAL:     '+privateKeyss+'       ',
			block : newBlock,
			chainG : BFG[kb-2],
			BFGId : BFG[kb-1]
		});
	});
});
	
app.get('/mine' , cors(corsOptions), function (req,res) {
		//getting the last block
	const lastBlock = zED.getLastBLock();


	const previousBlockHash = lastBlock['hash'];
	const currentBlockData = {
		transaction : zED.pendingTransactions,
		index : lastBlock['index'] + 1
	};

	const nonce = zED.proofOfWork(previousBlockHash,currentBlockData);
	const currentBlockHash = zED.createHashBlock(previousBlockHash,currentBlockData,nonce);

	//creating a new block and adding it to chain
	const newBlock = zED.createNewBlock(nonce,previousBlockHash,currentBlockHash);

	const requestPromise = [];
	zED.networkNodes.forEach(networkNodeUrl => {
		const registerOptions = {
			uri:networkNodeUrl + '/receive-new-block',
			method:'POST',
			body : {newBlock : newBlock },
			json:true
		};
		requestPromise.push(rp(registerOptions));
	});
	Promise.all(requestPromise)
	.then(data => {
		const registerOptions = {
			uri: zED.currentNodeUrl + '/transaction/broadcast',
			method: 'POST',
			body: {
                amount : 7,
            	sender : '00',
                recipient : nodeAddress,
				nnet: 'GENESIS',
				timescale: 7
				
			},
			json:true
		};
		return rp(registerOptions);	
	})
	.then(data => {
		res.json({
			note : 'New block successfully mined',
			block : newBlock
		});
	});
});
	
app.get('/mine'+'/:kb' , cors(corsOptions), function (req,res) {


k = BFG.findIndex[chainF(BFGId)];
chainG = BFG[kb-2];
		//getting the last block
	const lastBlock = chainG.getLastBLock();


	const previousBlockHash = lastBlock['hash'];
	const currentBlockData = {
		transaction : chainG.pendingTransactions,
		index : lastBlock['index'] + 1
	};

	const nonce = chainG.proofOfWork(previousBlockHash,currentBlockData);
	const currentBlockHash = chainG.createHashBlock(previousBlockHash,currentBlockData,nonce);

	//creating a new block and adding it to chain
	const newBlock = chainG.createNewBlock(nonce,previousBlockHash,currentBlockHash);

	const requestPromise = [];
	chainG.networkNodes.forEach(networkNodeUrl => {
		const registerOptions = {
			uri:networkNodeUrl + '/receive-new-chain',
			method:'POST',
			body : {newBlock : newBlock },
			json:true
		};
		requestPromise.push(rp(registerOptions));
	});
	Promise.all(requestPromise)
	.then(data => {
		const registerOptions = {
			uri: chainG.currentNodeUrl + '/:kb'+'/transaction/broadcast',
			method: 'POST',
			body: {
                amount : 7,
            	sender : '00',
                recipient : nodeAddress,
				nnet: 'GENESIS',
				timescale: 7
				
			},
			json:true
		};
		return rp(registerOptions);	
	})
	.then(data => {
		res.json({
			note : 'New block successfully mined',
			block : newBlock
		});
	});
});


app.post('/register-and-broadcast-node', cors(corsOptions), function (req,res) {
	const newNodeUrl = req.body.newNodeUrl;
	if (zED.networkNodes.indexOf(newNodeUrl) == -1) {
		zED.networkNodes.push(newNodeUrl);
	}

	const registerNodes = [];
	zED.networkNodes.forEach(networkNodeUrl => {
		const registerOptions = {
		uri : networkNodeUrl + '/register-node',
		method:'POST',
		body : { newNodeUrl : newNodeUrl },
		json : true
		};
		registerNodes.push(rp(registerOptions));
	});
	Promise.all(registerNodes)
	.then(data => {
			const registerBulk = {
				uri:newNodeUrl + '/register-bulk-nodes',
				method:'POST',
				body :{ allNetworkNodes:[ ...zED.networkNodes, zED.currentNodeUrl ]},
				json: true
			};

			return rp(registerBulk);
	})
	.then(data => {
		res.json({ note : `${newNodeUrl} is registered in the network`});
	});
});

app.post('/register-node', function (req,res) {
	const newNodeUrl = req.body.newNodeUrl;
	const isPresentInNetworkNodes = zED.networkNodes.indexOf(newNodeUrl) == -1;
	const isCurrentNode = zED.currentNodeUrl != newNodeUrl;
	
	if(isCurrentNode && isPresentInNetworkNodes) {
	zED.networkNodes.push(newNodeUrl);
	res.json({ note : `This node has been added successfully with ${zED.currentNodeUrl}`}); 
	}

	else {
	res.json({ note : `This node has already been added with ${zED.currentNodeUrl}`});
	}
});

app.post('/register-bulk-nodes', cors(corsOptions), function (req,res)  {
	const allNetworkNodes = req.body.allNetworkNodes;
	allNetworkNodes.forEach(networkNodeUrl => {
		const isPresentInNetworkNodes = zED.networkNodes.indexOf(networkNodeUrl) == -1;  
		const isCurrentNode = zED.currentNodeUrl != networkNodeUrl;                                                                                                                                                               
		if(isPresentInNetworkNodes && isCurrentNode) zED.networkNodes.push(networkNodeUrl);
	});

	res.json({ note : `All nodes are added in ${zED.currentNodeUrl} `})
});



app.listen(port, function() {
	console.log(`listening on port ${port}`);
});



app.post('/receive-new-block', cors(corsOptions), function(req,res) {
	const newBlock = req.body.newBlock;
	const lastBlock = zED.getLastBLock();
	const correctHash = lastBlock.hash === newBlock.previousHash;
	const correctIndex = lastBlock['index'] + 1 === newBlock['index'];

	if (correctIndex && correctHash ) {
		zED.chain.push(newBlock);
		zED.pendingTransaction = [];
		res.json({
			note:'New block recieved and accepted',
			newBlock:newBlock 
		});
	} 	
	else {
		res.json({
			note:'Block was rejected',
			newBlock:newBlock
		});
	}
});

app.post('/:kb'+'/receive-new-chain', cors(corsOptions), function(req,res) {
	
	
	
k = BFG.findIndex[chainF(BFGId)];
chainG = BFG[kb-2];
	
	
	
	const newBlock = req.body.newBlock;
	const lastBlock = zED.getLastBLock();
	const correctHash = lastBlock.previousHash === lastBlock.hash;
	const correctIndex = lastBlock['index'] + 1 === newBlock['index'];

	if (lastBlock ) {
		zED.chain.push(newBlock);
		zED.pendingTransaction = [zED.createNewTransaction(req.body.sender,req.body.nnet,req.body.timescale)];
		res.json({
			note:'New Chain recieved and accepted',
			newBlock:newBlock 
		});
	} 	
	else {
		res.json({
			note:'Chain rejected',
			newBlock:newBlock
		});
	}
});

app.get('/consensus', cors(corsOptions), function(req,res) {
	const requestPromise = [];
	zED.networkNodes.forEach(networkNodeUrl => {
		const requestOptions = {
			uri : networkNodeUrl + '/blockchain',
			method : 'GET',
			json : true
		};
		requestPromise.push(rp(requestOptions));
	});
	Promise.all(requestPromise)
	.then(blockchains => {
		const currentChainLength = zED.chain.length;
		let maxChainLength = currentChainLength;
		let newLongestChain = null;
		let newPendingTransactions = null;

		blockchains.forEach(blockchain => {
			if(blockchain.chain.length > currentChainLength) {
				maxChainLength > blockchain.chain.length;
				newLongestChain = blockchain.chain;
				newPendingTransactions = blockchain.pendingTransaction;
			}
		});

		if(newLongestChain) {
			zED.chain = newLongestChain;
			zED.pendingTransaction = newPendingTransactions;
		}
		else {
			res.json({
				note: 'Cannot change length',
			});
		}

	});
});

app.get('/block/:blockhash', cors(corsOptions), function (req,res) {
	const blockhash = req.params.blockhash;
	const block = zED.getBlock(blockhash);
	res.json({
		block : block
	});
});

app.get('/transactionId/:transactionId', cors(corsOptions), function(req,res){
	const transactionId = req.params.transactionId;
	const transactionData = zED.getTransactionId(transactionId);
	res.json({
		transaction : transactionData.transaction,
		block : transactionData.block
	});
});










app.get('/BFG/:kb', cors(corsOptions), function(req,res){
k = BFG.findIndex[chainF(BFGId)];
chainG = BFG[kb-2];

	
	res.json({
		BFG : BFG[kb-2],
		BFGId : BFG[kb-1]
	});
});





app.get('/address/:address', cors(corsOptions),function (req,res) {
	const address = req.params.address;
	const addressData = zED.getAddress(address);
	res.json({
		addressData : addressData	
	});
});

app.get('/block-explorer', cors(corsOptions), function(req, res) {
	res.sendFile('/block-explorer/index.html', { root: __dirname });
});
