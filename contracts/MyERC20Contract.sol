// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract MyERC20Contract is Initializable, ERC20Upgradeable {
    uint256 public val1;

    // To prevent the implementation contract from being used, you should invoke the 
    // _disableInitializers function in the constructor to automatically lock it when it is deployed
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(uint256 _val1) external initializer {
        __ERC20_init("UpgradeableToken", "UGT");
        val1 = _val1;
    }

    function getVal1() external view returns(uint256) {
        return val1;
    }
}