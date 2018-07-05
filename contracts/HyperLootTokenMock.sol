pragma solidity ^0.4.24;

import "./HyperLootToken.sol";


// mock class using StandardToken
contract HyperLootTokenMock is HyperLootToken {

    constructor(address initialAccount, uint256 initialBalance) public {
        balances[initialAccount] = initialBalance;
        totalSupply_ = initialBalance;
    }

}
