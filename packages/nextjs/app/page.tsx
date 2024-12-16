"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { useState } from "react";
import { parseEther } from "viem";


const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  const { data: balanceofA } = useScaffoldReadContract({
    contractName: "SimpleDEX",
    functionName: "balanceofA",
  });

  const { data: balanceofB } = useScaffoldReadContract({
    contractName: "SimpleDEX",
    functionName: "balanceofB",
  });

  const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract("SimpleDEX");

  const [valor, setValor] = useState<string>("");

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-4xl font-bold">SimpleDEX</span>
          </h1>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>

          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium">Contract Address SimpleDEX:</p>

            <div className="flex">
              <span className="ml-1.5 text-base font-normal">
                <a href="/blockexplorer/address/0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0">0x9fE4...a6e0</a>
              </span>
              <button type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="ml-1 h-[18px] w-[18px] cursor-pointer">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75">
                  </path>
                </svg>
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium">Contract Address TokenA:</p>

            <div className="flex">
              <span className="ml-1.5 text-base font-normal">
                <a href="/blockexplorer/address/0x5FbDB2315678afecb367f032d93F642f64180aa3">0x5FbD...0aa3</a>
              </span>
              <button type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="ml-1 h-[18px] w-[18px] cursor-pointer">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75">
                  </path>
                </svg>
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium">Contract Address TokenB:</p>

            <div className="flex">
              <span className="ml-1.5 text-base font-normal">
                <a href="/blockexplorer/address/0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512">0xe7f1...0512</a>
              </span>
              <button type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="ml-1 h-[18px] w-[18px] cursor-pointer">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75">
                  </path>
                </svg>
              </button>
            </div>
          </div>

        </div>

        <div className="flex-grow bg-base-100 w-full ">
          <div className="flex justify-center gap-80 flex-col sm:flex-row">
            <div className="flex bg-base-100 items-center flex-col flex-grow">
              <p className="text-center text-lg">
                Balance of Token A:
                <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
                  {(balanceofA?.toString())}
                </code>
              </p>
            </div>

            <div className="flex bg-base-100 items-center flex-col flex-grow">
              <p className="text-center text-lg">
                Balance of Token B:
                <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
                  {(balanceofB?.toString())}
                </code>
              </p>
            </div>
          </div>
        </div>

        <div className="px-5">

          <div className="flex flex-col gap-3 py-5 first:pt-0 last:pb-1">
            <p className="font-medium my-0 break-words">Price: </p>
            <div className="flex flex-col gap-1.5 w-full">

              <div className="flex border-2 border-base-300 bg-base-200 rounded-full text-accent ">
                <input className="input input-ghost focus-within:border-transparent focus:outline-none focus:bg-transparent h-[2.2rem] min-h-[2.2rem] px-4 border w-full font-medium placeholder:text-accent/70 text-base-content/70 focus:text-base-content/70" placeholder="address _token" autoComplete="off" value={valor} name="getPrice__token_address_address" onChange={e => setValor(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-2 flex-wrap"><div className="flex-grow w-full md:max-w-[80%]">
            </div>
              <button
                className="btn btn-primary"
                onClick={async () => {
                  try {
                    await writeYourContractAsync({
                      functionName: "getPrice",
                      args: [valor],
                      value: parseEther("0.1"),
                    });
                  } catch (e) {
                    console.error("Error getting price:", e);
                  }
                }}
              >
                Get Price
              </button>
            </div>
          </div>
        </div>



        <div className="flex-grow bg-base-300 w-full mt-52 px-8 py-12">
          <div className="flex justify-center gap-80 flex-col sm:flex-row">
            <span className="block text-2xl mb-2">Author: Salvador Carballo</span>
            <span className="block text-2xl mb-2">Ethereum Developer - ETH Kipu</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
