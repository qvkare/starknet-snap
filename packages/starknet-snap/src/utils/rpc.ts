import type { Struct } from 'superstruct';
import { assert } from 'superstruct';

import { InvalidRequestParamsError, UnknownError } from './exceptions';

/**
 * Validates that the request parameters conform to the expected structure defined by the provided struct.
 *
 * @template Params - The expected structure of the request parameters.
 * @param requestParams - The request parameters to validate.
 * @param struct - The expected structure of the request parameters.
 * @throws {InvalidRequestParamsError} If the request parameters do not conform to the expected structure.
 */
export function validateRequest<Params>(requestParams: Params, struct: Struct) {
  try {
    assert(requestParams, struct);
  } catch (error) {
    throw new InvalidRequestParamsError(error.message) as unknown as Error;
  }
}

/**
 * Validates that the response conforms to the expected structure defined by the provided struct.
 *
 * @template Params - The expected structure of the response.
 * @param response - The response to validate.
 * @param struct - The expected structure of the response.
 * @throws {SnapError} If the response does not conform to the expected structure.
 */
export function validateResponse<Params>(response: Params, struct: Struct) {
  try {
    assert(response, struct);
  } catch (error) {
    throw new UnknownError('Invalid Response') as unknown as Error;
  }
}
