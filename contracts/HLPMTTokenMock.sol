pragma solidity 0.4.24;

import "./HLPMTToken.sol";


/**
 * @title ERC721TokenMock
 * This mock just provides a public mint and burn functions for testing purposes,
 * and a public setter for metadata URI
 */
contract HLPMTTokenMock is HLPMTToken {
    constructor(address _holder1, address _holder2) public
      HLPMTToken(_holder1, _holder2)
    { }

    function setTokenURI(uint256 _tokenId, string _uri) public {
        super._setTokenURI(_tokenId, _uri);
    }
}
