import { Meta } from '@storybook/react';
import { ContractFuncName, Transaction, TransactionStatus } from 'types';
import { TransactionsListView } from './TransactionsList.view';

export default {
  title: 'Molecule/TransactionsList',
  component: TransactionsListView,
} as Meta;

const transactions: Transaction[] = [
  {
    txnHash:
      '0x3d82342a73d5562d65986c40b88123913a8f0b72be390b3d54377ca3216825d',
    txnType: 'invoke',
    chainId: '0x534e5f5345504f4c4941',
    senderAddress:
      '0x5ccc9fc2d7ce9e2b0f2cee1a4b898570bb4d03ba23ad6f72f0db971bd04552c',
    contractAddress:
      '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
    executionStatus: TransactionStatus.SUCCEEDED,
    finalityStatus: TransactionStatus.RECEIVED,
    failureReason: '',
    timestamp: 1655869759,
    accountCalls: {
      '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7': [
        {
          contract:
            '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
          contractFuncName: ContractFuncName.Transfer,
          contractCallData: [
            '0x6b686ebe2cbd70b37b54df1b9889cc3095b55f386110843912efcaed416ff3f',
            '0x0de0b6b3a7640000',
          ],
        },
      ],
    },
    maxFee: null,
    actualFee: null,
    version: 1,
    dataVersion: '2',
  },
  {
    txnHash:
      '0x1321951d3102d45abd6dd9ac556b6a86190c78b1026279a8d44cb18c0008eb6',
    txnType: 'invoke',
    chainId: '0x534e5f5345504f4c4941',
    senderAddress:
      '0x05ccc9fc2d7ce9e2b0f2cee1a4b898570bb4d03ba23ad6f72f0db971bd04552c',
    contractAddress:
      '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
    timestamp: 1655705597,
    executionStatus: TransactionStatus.SUCCEEDED,
    finalityStatus: TransactionStatus.ACCEPTED_ON_L2,
    failureReason: '',
    accountCalls: {
      '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7': [
        {
          contract:
            '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
          contractFuncName: ContractFuncName.Transfer,
          contractCallData: [
            '0x6b686ebe2cbd70b37b54df1b9889cc3095b55f386110843912efcaed416ff3f',
            '0x0de0b6b3a7640000',
          ],
        },
      ],
    },
    maxFee: null,
    actualFee: null,
    version: 1,
    dataVersion: '2',
  },
  {
    txnHash:
      '0x3b07b90f722dfd18623dcb5b21e0efc8a72625bac50eacd58cde4b02e75f2c9',
    txnType: 'invoke',
    chainId: '0x534e5f5345504f4c4941',
    senderAddress:
      '0x5ccc9fc2d7ce9e2b0f2cee1a4b898570bb4d03ba23ad6f72f0db971bd04552c',
    contractAddress:
      '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
    executionStatus: TransactionStatus.REJECTED,
    finalityStatus: TransactionStatus.NOT_RECEIVED,
    failureReason:
      'Actual fee exceeded max fee.\n13056675060932 > 9585012591398',
    timestamp: 1655695493,
    accountCalls: {
      '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7': [
        {
          contract:
            '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
          contractFuncName: ContractFuncName.Transfer,
          contractCallData: [
            '0x6b686ebe2cbd70b37b54df1b9889cc3095b55f386110843912efcaed416ff3f',
            '0x0de0b6b3a7640000',
          ],
        },
      ],
    },
    maxFee: null,
    actualFee: null,
    version: 1,
    dataVersion: '2',
  },
  {
    txnHash:
      '0x61f7c1c7bc55f18414cc876bb80dfd340cbeda29035c696ce37ef8ec256a466',
    txnType: 'invoke',
    chainId: '0x534e5f5345504f4c4941',
    senderAddress:
      '0x05ccc9fc2d7ce9e2b0f2cee1a4b898570bb4d03ba23ad6f72f0db971bd04552c',
    contractAddress:
      '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
    timestamp: 1654745214,
    executionStatus: TransactionStatus.SUCCEEDED,
    finalityStatus: TransactionStatus.ACCEPTED_ON_L1,
    failureReason: '',
    accountCalls: {
      '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7': [
        {
          contract:
            '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
          contractFuncName: ContractFuncName.Transfer,
          contractCallData: [
            '0x14361d05e560796ad3152e083b609f5205f3bd76039327326746ba7f769a666',
            '0x0de0b6b3a7640000',
          ],
        },
      ],
    },
    maxFee: null,
    actualFee: null,
    version: 1,
    dataVersion: '2',
  },
  {
    txnHash:
      '0x33e94af9ee3ab7ddcd1aa9fe63942eee9ea5be474061d4ddac6deb466f3b12f',
    txnType: 'invoke',
    chainId: '0x534e5f5345504f4c4941',
    senderAddress:
      '0x05ccc9fc2d7ce9e2b0f2cee1a4b898570bb4d03ba23ad6f72f0db971bd04552c',
    contractAddress:
      '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
    timestamp: 1654708040,
    executionStatus: TransactionStatus.SUCCEEDED,
    finalityStatus: TransactionStatus.ACCEPTED_ON_L1,
    failureReason: '',
    accountCalls: {
      '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7': [
        {
          contract:
            '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
          contractFuncName: ContractFuncName.Transfer,
          contractCallData: [
            '0x14361d05e560796ad3152e083b609f5205f3bd76039327326746ba7f769a666',
            '0x0de0b6b3a7640000',
          ],
        },
      ],
    },
    maxFee: null,
    actualFee: null,
    version: 1,
    dataVersion: '2',
  },
  {
    txnHash:
      '0x58b04d593d8f7e7166e16d15a67f843fb02c5d17a77aae74e8baf42cd017070',
    txnType: 'invoke',
    chainId: '0x534e5f5345504f4c4941',
    senderAddress:
      '0x05ccc9fc2d7ce9e2b0f2cee1a4b898570bb4d03ba23ad6f72f0db971bd04552c',
    contractAddress:
      '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
    timestamp: 1654701586,
    executionStatus: TransactionStatus.SUCCEEDED,
    finalityStatus: TransactionStatus.ACCEPTED_ON_L1,
    failureReason: '',
    accountCalls: {
      '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7': [
        {
          contract:
            '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
          contractFuncName: ContractFuncName.Transfer,
          contractCallData: [
            '0x14361d05e560796ad3152e083b609f5205f3bd76039327326746ba7f769a666',
            '0x1bc16d674ec80000',
          ],
        },
      ],
    },
    maxFee: null,
    actualFee: null,
    version: 1,
    dataVersion: '2',
  },
  {
    txnHash: '0x81fab4268648483028b9be3353d6551ca35041fb2a03c2f372b19f3ab109b1',
    txnType: 'invoke',
    chainId: '0x534e5f5345504f4c4941',
    senderAddress:
      '0x05ccc9fc2d7ce9e2b0f2cee1a4b898570bb4d03ba23ad6f72f0db971bd04552c',
    contractAddress:
      '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
    timestamp: 1654678571,
    executionStatus: TransactionStatus.SUCCEEDED,
    finalityStatus: TransactionStatus.ACCEPTED_ON_L1,
    failureReason: '',
    accountCalls: {
      '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7': [
        {
          contract:
            '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
          contractFuncName: ContractFuncName.Transfer,
          contractCallData: [
            '0x256d8f49882cc9366037415f48fa9fd2b5b7344ded7573ebfcef7c90e3e6b75',
            '0x0de0b6b3a7640000',
          ],
        },
      ],
    },
    maxFee: null,
    actualFee: null,
    version: 1,
    dataVersion: '2',
  },
  {
    txnHash:
      '0x2b16c4989c0fa7baf91082e4d4af6f82d3111c86a4265bc8a2889401099cd3d',
    txnType: 'invoke',
    chainId: '0x534e5f5345504f4c4941',
    senderAddress:
      '0x05ccc9fc2d7ce9e2b0f2cee1a4b898570bb4d03ba23ad6f72f0db971bd04552c',
    contractAddress:
      '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
    timestamp: 1654670913,
    executionStatus: TransactionStatus.SUCCEEDED,
    finalityStatus: TransactionStatus.ACCEPTED_ON_L1,
    failureReason: '',
    accountCalls: {
      '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7': [
        {
          contract:
            '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
          contractFuncName: ContractFuncName.Transfer,
          contractCallData: [
            '0x256d8f49882cc9366037415f48fa9fd2b5b7344ded7573ebfcef7c90e3e6b75',
            '0x3782dace9d900000',
          ],
        },
      ],
    },
    maxFee: null,
    actualFee: null,
    version: 1,
    dataVersion: '2',
  },
  {
    txnHash:
      '0x40a693f71f1e9d384e178dbafe5d1d99ccbc6b8fe64b49986a70058c6b68983',
    txnType: 'deploy',
    chainId: '0x534e5f5345504f4c4941',
    senderAddress:
      '0x05ccc9fc2d7ce9e2b0f2cee1a4b898570bb4d03ba23ad6f72f0db971bd04552c',
    contractAddress:
      '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
    timestamp: 1654662459,
    executionStatus: TransactionStatus.SUCCEEDED,
    finalityStatus: TransactionStatus.ACCEPTED_ON_L1,
    failureReason: '',
    accountCalls: {
      '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7': [
        {
          contract:
            '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
          contractFuncName: '',
          contractCallData: [],
        },
      ],
    },
    maxFee: null,
    actualFee: null,
    version: 1,
    dataVersion: '2',
  },
];

export const FullWidth = () => (
  <TransactionsListView transactions={transactions} />
);

export const HalfWidth = () => {
  return (
    <div style={{ width: '50%' }}>
      <TransactionsListView transactions={transactions} />
    </div>
  );
};
