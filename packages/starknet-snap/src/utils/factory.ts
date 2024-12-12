import type { IDataClient } from '../chain/data-client';
import { StarkScanClient } from '../chain/data-client/starkscan';
import { TransactionService } from '../chain/transaction-service';
import { Config, DataClient } from '../config';
import type { TransactionStateManager } from '../state/transaction-state-manager';
import type { Network } from '../types/snapState';

/**
 * Create a StarkScan client.
 *
 * @param network - The network to create the data client for.
 * @returns The StarkScan client.
 * @throws Error if the StarkScan API key is missing.
 */
export function createStarkScanClient(network: Network): IDataClient {
  const { apiKey } = Config.dataClient[DataClient.STARKSCAN];

  if (!apiKey) {
    throw new Error('Missing StarkScan API key');
  }

  const dataClient = new StarkScanClient(network, {
    apiKey,
  });

  return dataClient;
}

/**
 * Create a TransactionService object.
 *
 * @param network - The network.
 * @param [txnStateMgr] - The transaction state manager.
 * @returns A TransactionService object.
 */
export function createTransactionService(
  network: Network,
  txnStateMgr?: TransactionStateManager,
): TransactionService {
  const dataClient = createStarkScanClient(network);
  return new TransactionService({
    dataClient,
    network,
    txnStateMgr,
  });
}
