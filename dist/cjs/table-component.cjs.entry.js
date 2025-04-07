'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4e1c0aaa.js');

const tableComponentCss = "table{width:100%;border-collapse:collapse}th,td{border:1px solid #ddd;padding:8px;text-align:left}th{background-color:#f4f4f4;font-weight:bold}";
const TableComponentStyle0 = tableComponentCss;

const TableComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("table", { key: 'c0aeccbdeae286e87086d4abda5c1e486da0320b' }, index.h("thead", { key: '2f1f7363a18d0ee02bbe3cfac371e964f2277cb6' }, index.h("tr", { key: '4932e213f82fc64d695eaba8c075ee0ef233a0c0' }, this.headers.map((header) => (index.h("th", null, header))))), index.h("tbody", { key: '1340dc29a3277a3d864956111a6606cae0b72bb4' }, this.rows.map((row) => (index.h("tr", null, row.map((cell) => (index.h("td", null, cell)))))))));
    }
};
TableComponent.style = TableComponentStyle0;

exports.table_component = TableComponent;

//# sourceMappingURL=table-component.cjs.entry.js.map