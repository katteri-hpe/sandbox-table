import { r as registerInstance, h } from './index-cadd7e86.js';

const tableComponentCss = "table{width:100%;border-collapse:collapse}th,td{border:1px solid #ddd;padding:8px;text-align:left}th{background-color:#f4f4f4;font-weight:bold}";
const TableComponentStyle0 = tableComponentCss;

const TableComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("table", { key: 'c0aeccbdeae286e87086d4abda5c1e486da0320b' }, h("thead", { key: '2f1f7363a18d0ee02bbe3cfac371e964f2277cb6' }, h("tr", { key: '4932e213f82fc64d695eaba8c075ee0ef233a0c0' }, this.headers.map((header) => (h("th", null, header))))), h("tbody", { key: '1340dc29a3277a3d864956111a6606cae0b72bb4' }, this.rows.map((row) => (h("tr", null, row.map((cell) => (h("td", null, cell)))))))));
    }
};
TableComponent.style = TableComponentStyle0;

export { TableComponent as table_component };

//# sourceMappingURL=table-component.entry.js.map