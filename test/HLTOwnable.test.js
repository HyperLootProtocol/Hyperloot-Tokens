import shouldBehaveLikeOwnable from '../test/Ownable.behaviour';

const Ownable = artifacts.require('HyperLootToken.sol');

contract('HyperLootToken Ownable', function (accounts) {
  beforeEach(async function () {
    this.ownable = await Ownable.new();
  });

  shouldBehaveLikeOwnable(accounts);
});
