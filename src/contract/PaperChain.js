export const PaperChainAddress = "0xFB37e7c5646AbC91D1D5C1c51B6B3478BF565709";

export const PaperChainABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "documentRoot",
        type: "bytes32",
      },
    ],
    name: "DocumentStored",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_documentHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_documentRoot",
        type: "bytes32",
      },
    ],
    name: "storeDoc",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_documentHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "_merkleProof",
        type: "bytes32[]",
      },
    ],
    name: "checkValidity",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "documentRoots",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
