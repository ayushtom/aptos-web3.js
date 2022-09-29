"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Block = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$Block = {
    description: `A Block with or without transactions

    This contains the information about a transactions along with
    associated transactions if requested`,
    properties: {
        block_height: {
            type: 'U64',
            isRequired: true,
        },
        block_hash: {
            type: 'HashValue',
            isRequired: true,
        },
        block_timestamp: {
            type: 'U64',
            isRequired: true,
        },
        first_version: {
            type: 'U64',
            isRequired: true,
        },
        last_version: {
            type: 'U64',
            isRequired: true,
        },
        transactions: {
            type: 'array',
            contains: {
                type: 'Transaction',
            },
        },
    },
};
//# sourceMappingURL=$Block.js.map