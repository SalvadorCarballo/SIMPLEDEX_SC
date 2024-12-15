import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "SimpleDEX" using the deployer account and
 * constructor arguments set to the deployer address, TokenA address and TokenB address.
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deploySimpleDEX: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {

  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;
  const TokenA = await deploy("TokenA", {from: deployer, log: true});
  const TokenB = await deploy("TokenB", {from: deployer, log: true});

  await deploy("SimpleDEX", {
    from: deployer,
    // Contract constructor arguments
    args: [TokenA.address, TokenB.address, deployer],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  const simpleDEX = await hre.ethers.getContract<Contract>("SimpleDEX", deployer);
 
};

export default deploySimpleDEX;

// Tags are useful if you have multiple deploy files and only want to run one of them.

deploySimpleDEX.tags = ["SimpleDEX"];
