export declare const $WriteSetChange: {
    readonly type: "one-of";
    readonly description: "A final state change of a transaction on a resource or module";
    readonly contains: readonly [{
        readonly type: "WriteSetChange_DeleteModule";
    }, {
        readonly type: "WriteSetChange_DeleteResource";
    }, {
        readonly type: "WriteSetChange_DeleteTableItem";
    }, {
        readonly type: "WriteSetChange_WriteModule";
    }, {
        readonly type: "WriteSetChange_WriteResource";
    }, {
        readonly type: "WriteSetChange_WriteTableItem";
    }];
};
//# sourceMappingURL=$WriteSetChange.d.ts.map