const HyperLootTokenContract = artifacts.require("./HyperLootToken.sol");
const HLPMTTokenContract = artifacts.require("./HLPMTToken.sol");
const ManagementContract = artifacts.require("./ManagementMock.sol");

module.exports = async function(deployer, network, accounts) {
    let fund = accounts[9];
    let dao = accounts[8];
    let holder1 = accounts[5];
    let holder2 = accounts[1];

    deployer.then(async () => {
        await deployer.deploy(HyperLootTokenContract);
        await deployer.deploy(HLPMTTokenContract, holder1, holder2);

        await deployer.link(HLPMTTokenContract, ManagementContract);
        await deployer.link(HyperLootTokenContract, ManagementContract);
        return await deployer.deploy(ManagementContract, HyperLootTokenContract.address, HLPMTTokenContract.address, dao, fund);
    });

    console.log('Contracts are deployed!');
};
