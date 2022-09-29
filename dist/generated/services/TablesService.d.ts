import type { Address } from '../models/Address';
import type { MoveValue } from '../models/MoveValue';
import type { TableItemRequest } from '../models/TableItemRequest';
import type { U64 } from '../models/U64';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class TablesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get table item
     * Get a table item at a specific ledger version from the table identified by {table_handle}
     * in the path and the "key" (TableItemRequest) provided in the request body.
     *
     * This is a POST endpoint because the "key" for requesting a specific
     * table item (TableItemRequest) could be quite complex, as each of its
     * fields could themselves be composed of other structs. This makes it
     * impractical to express using query params, meaning GET isn't an option.
     *
     * The Aptos nodes prune account state history, via a configurable time window.
     * If the requested ledger version has been pruned, the server responds with a 410.
     * @param tableHandle Table handle hex encoded 32-byte string
     * @param requestBody
     * @param ledgerVersion Ledger version to get state of account
     *
     * If not provided, it will be the latest version
     * @returns MoveValue
     * @throws ApiError
     */
    getTableItem(tableHandle: Address, requestBody: TableItemRequest, ledgerVersion?: U64): CancelablePromise<MoveValue>;
}
//# sourceMappingURL=TablesService.d.ts.map