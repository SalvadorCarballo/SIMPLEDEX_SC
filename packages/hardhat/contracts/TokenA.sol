// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenA is ERC20, Ownable {
    constructor()
        ERC20("TokenA", "TKA")
        Ownable(msg.sender)
    {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }

//Function not restricted to the contract owner. Any user can mint tokens.
    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}