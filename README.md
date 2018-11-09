# Hyperloot project

## Introduction

This repository contains the smart contracts, test cases, and deployment scirpts for the contracts:

  - HLT token (ERC20) (HLPMTToken.sol)
  - HLPMT token (ERC721) (HyperLootToken.sol)
  - Management (Management.sol)

## Description

HLT token is ERC 20 which are mined every day using the HLPMT (the mining tokens).

  - Name: HyperLoot
  - Symbol: HLT
  - Max Supply: 1,000,000,000
  - Type: ERC20
  - Mining: 0.1% daily from remaining unmined tokens.
  - Mining type: Proof of Stake
  - Premine: 0

HLT token is mined by the owners of the mining token - HLPMT.

  - Name: HyperLoot Protocol Mining Token
  - Symbol: HLPMT
  - Max Supply: unlimited
  - Type: ERC721
  - Premine: 20

Emissions happen daily. All of the tokens mined within a day are distributed between 3 groups:

Miners get 40% of the overall token amount;

DAO receives 30% of daily mined tokens;

30% is reserved for internal development fund.

## Solidity compiler
- build Version :
> 0.4.24+commit.e67f0147.Emscripten.clang

## Truffle
- Version : Truffle v4.1.11

## Dependencies
We use Truffle in order to compile and test the contracts.

It can be installed:
`npm install -g truffle@4.1.11`

For more information visit https://truffle.readthedocs.io/en/latest/

We use solidity-coverage in order to define the tests coverage.

It can be installed:
`npm install --save-dev solidity-coverage`

For more information visit https://www.npmjs.com/package/solidity-coverage

Also running node with active json-rpc is required. For testing puproses we suggest using https://github.com/trufflesuite/ganache

It can be installed:
`npm install ganache-cli`

## Usage

#### Test

Constracts and scripts for testing are in the branch called "full_tests". Checkout into the branch to run tests.

1. Start ganache node server: `node_modules/.bin/ganache-cli -e 10000 --gasLimit 0xfffffffffff &`

2. `truffle compile` - compile all contracts

3. `truffle test --network ganache` - run tests


#### Test coverage

1. Open a terminal at the project folder.
2. `./node_modules/.bin/solidity-coverage` - run tests and check the coverage

#### Live contracts

https://etherscan.io/address/0x024008f43b1956e111cdb88a76b517cb4b241c7e - HLPMT token
https://etherscan.io/address/0xa809d363a66c576a2a814cdbfefc107c600a55f0 - HLT token
https://etherscan.io/address/0xe84fd16bdf58f2d890046a7b20cf0a10104610da - Managment contract

#### Transferring token ownership to the management contract (Only for DAO contract)

1. Copy the ERC20 contract code https://etherscan.io/address/0xa809d363a66c576a2a814cdbfefc107c600a55f0#code

2. Visit https://remix.ethereum.org 
- Paste the code into the window
- Choose the compiler version: 0.4.24+commit.e67f0147 in the "Compile" tab on the right 
- Press “Start to compile” button
- Choose the "Run" tab

3. Choose Metamask account: 0x5c494af65a4ffb845e3bdc7ead982ec1f1751293 (DAO)

4. In the "run" tab choose the environment: injected web3 (first line), that should return the DAO address

5. Out of the ERC20 list choose Hyperloot token

6. Insert token address 0xA809d363A66c576A2a814CDBfEFC107C600A55f0 to the AtAddress field and press it

7. Recall approve with the following parameters: address 0xE84Fd16BDf58F2D890046a7B20CF0a10104610DA (management contract address) and the required token number + 18 decimals

8. Confirm Metamask transaction

#### Sending vested tokens (Only for DAO contract)

1. Transferring tokens to the management contract. Copy the management contract code https://etherscan.io/address/0xe84fd16bdf58f2d890046a7b20cf0a10104610da#code 

2. Visit https://remix.ethereum.org 
- Adding one more file 
- Paste the code into the new “Remix” window
- Compile
- Back on the “run” tab choose the management contract
- Paste the address across from management contract address 0xe84fd16bdf58f2d890046a7b20cf0a10104610da
- Press “at address”

3. Choose “asyncSend” with the following parameters:
- Payment address
- Amount
- Third field is unix time, meaning the time in seconds when a recipient can acquire the tokens (https://www.unixtimestamp.com/index.php)

4. Confirm Metamask transaction

#### Transferring tokens after vesting to the target wallet 

1. Copy management contract code https://etherscan.io/address/0xe84fd16bdf58f2d890046a7b20cf0a10104610da#code 

2. Visit https://remix.ethereum.org 
- Paste the code into the window
- Choose the compiler version: 0.4.24+commit.e67f0147 in the "Compile" tab on the right 
- Press “Start to compile” button
- Choose the "Run" tab

3. Choose metamask account (token recipient)

4. In the "run" tab choose the environment: injected web3 (first line), that should return the Metamask address

5. Choose “Management” from the drop down menu

6. Insert the management contract address 0xe84fd16bdf58f2d890046a7b20cf0a10104610da to the  “AtAddress” field and press “AtAddress”

7. Recall “withdrawPayments” function

8. Confirm Metamask transaction

#### Get vesting information

1. Open the following link to review code https://etherscan.io/address/0xe84fd16bdf58f2d890046a7b20cf0a10104610da#readContract 

2. Find “Payments” field

3.	Paste your address and press “Query”. You receive payments method Response with a uint256 number. That is the amount of tokens + 18 decimals

4. Find “paymentsTimestamps” field

5. Paste your address and press “Query”

6. Receive “paymentsTimestamps” method Response and a uint256 number:  1540584900. This is a date in unix encoding, you can find out the date here: https://www.unixtimestamp.com/index.php

#### Finding HLPMT current pricing (HLT)

1. Visit etherscan https://etherscan.io/address/0xe84fd16bdf58f2d890046a7b20cf0a10104610da#readContract

2. Recall “getPrice” with the current timestamp and get the pricing. You can get current timestamp in unix here: https://www.unixtimestamp.com/index.php

#### Transferring tokens for approval to the management contract

1. Copy ERC20 contact code https://etherscan.io/address/0xa809d363a66c576a2a814cdbfefc107c600a55f0#code 

2. Visit https://remix.ethereum.org 
- Paste the code into the window
- Choose the compiler version: 0.4.24+commit.e67f0147 in the "Compile" tab on the right 
- Press “Start to compile” button
- Choose the "Run" tab

3. Choose the Metamask account that will buy HLPMT tokens with HLT tokens 

4. In the "run" tab choose the environment: injected web3 (first line), that will return the Metamask address

5. Out of the dropdown ERC20 list choose Hyperloot token

6. Insert token address 0xA809d363A66c576A2a814CDBfEFC107C600A55f0 to the AtAddress field and press it

7. Recall “Approve” with the following parameters:
- Address 0xE84Fd16BDf58F2D890046a7B20CF0a10104610DA (management contract address)
- And the required amount of tokens (equal to the number of nodes to purchase)

8. Confirm Metamask transaction

#### Receiving HLPMT after paying the HLT 

1. Copy management contract code https://etherscan.io/address/0xe84fd16bdf58f2d890046a7b20cf0a10104610da#code 

2. Visit https://remix.ethereum.org 
- Paste the code into the window
- Choose the compiler version: 0.4.24+commit.e67f0147 in the "Compile" tab on the right 
- Press “Start to compile” button
- Choose the "Run" tab

3. Choose your Metamask account

4. In the "run" tab choose the environment: injected web3 (first line), that will return the Metamask address

5. Ensure that the “management” is marked below

6. Insert the management contract address 0xe84fd16bdf58f2d890046a7b20cf0a10104610da to the  “AtAddress” field and press “AtAddress”

7. Recall “buy HLPMT” function

8. Confirm Metamask transaction

#### Receiving mined tokens if you’re a HLPMT holder

1. Cope management contract address https://etherscan.io/address/0xe84fd16bdf58f2d890046a7b20cf0a10104610da#code 

2. Visit https://remix.ethereum.org 
- Paste the code into the window
- Choose the compiler version: 0.4.24+commit.e67f0147 in the "Compile" tab on the right 
- Press “Start to compile” button
- Choose the "Run" tab

3. Choose your Metamask account

4. In the "run" tab choose the environment: injected web3 (first line), that will return the Metamask address

5. Ensure that the “management” is marked below

6. Insert the management contract address 0xe84fd16bdf58f2d890046a7b20cf0a10104610da to the  “AtAddress” field and press “AtAddress”

7. Check the reward amount using “checkReward”, include tokens id massive, ex., [0,1]

8. If the number is correct, use “getReward” to receive the tokens using the same data massive


