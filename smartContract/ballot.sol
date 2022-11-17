// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.7;

contract GToken {

    uint candidatesCount = 10;
    mapping(uint => string) candidates;
    mapping(uint => uint) votes;

    event VoteCasted(address voter, string votedFor);


    constructor(){
        candidates[1] = "John Doe";
        candidates[2] = "Ruja Ignatova";
        candidates[3] = "Satoshi Nakimoto";
        candidates[4] = "Battista Ahmed";
        candidates[5] = "Orpha Antonie";
        candidates[6] = "Bahadir Hadiyya";
        candidates[7] = "Aurora Yechezkel";
        candidates[8] = "Kotone Sylvia";
        candidates[9] = "Rakesh Nikolina";
        candidates[10] = "Per Olexiy";
    }

    function getCandidates() public view returns (string[] memory){
        string[] memory cadidatesNames = new string[](candidatesCount);
        for (uint256 i = 0; i < candidatesCount; i++) {
            cadidatesNames[i] = candidates[i];
        }
        return cadidatesNames;
    }

    function castVote(uint candidateNumber) public returns(bool valid) {
        votes[candidateNumber]++;

        emit VoteCasted(msg.sender, candidates[candidateNumber]);

        return true;
    }


    function getVotesPerCandidate(uint256 candidateNumber) public view returns (uint256 votesPerCandidate){
        return votes[candidateNumber];
    }

    function getAllVotes() public view  returns (uint[] memory) {
        uint[] memory allVotes = new uint[](candidatesCount);

        for (uint256 i = 0; i < candidatesCount; i++) {
            allVotes[i] = votes[i];
        }

        return allVotes;
    }
}

// 0xFB2638bDC2E2F9F9c6860a187B69b8219479A3D1