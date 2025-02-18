import type { SnapComponent } from '@metamask/snaps-sdk/jsx';
import { Box, Heading, Section } from '@metamask/snaps-sdk/jsx';
import type { Infer } from 'superstruct';

import type { CallDataStruct } from '../../utils';
import { getTranslator } from '../../utils/locale';
import { JsonDataUI, AddressUI, NetworkUI } from '../fragments';

export type SignTransactionUIProps = {
  senderAddress: string;
  networkName: string;
  chainId: string;
  transactions: Infer<typeof CallDataStruct>[];
};

/**
 * Builds a UI component for confirming the signing of a transaction.
 *
 * @param options - The options to configure the component.
 * @param options.senderAddress - The address of the sender initiating the transaction.
 * @param options.networkName - The name of the blockchain network where the transaction will occur.
 * @param options.chainId - The chain ID of the blockchain network.
 * @param options.transactions - An array of transactions Call.
 * @returns A JSX component for the user to review and confirm the transaction signing.
 */
export const SignTransactionUI: SnapComponent<SignTransactionUIProps> = ({
  senderAddress,
  networkName,
  chainId,
  transactions,
}) => {
  const translate = getTranslator();
  return (
    <Box>
      <Heading>{translate('signTransactionPrompt')}</Heading>
      <Section>
        <AddressUI
          label={translate('signer')}
          address={senderAddress}
          chainId={chainId}
        />
        <NetworkUI networkName={networkName} />
        <JsonDataUI label={translate('transactions')} data={transactions} />
      </Section>
    </Box>
  );
};
