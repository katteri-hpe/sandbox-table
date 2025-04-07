import { h } from "@stencil/core";
export class TableComponent {
    render() {
        return (h("table", { key: 'c0aeccbdeae286e87086d4abda5c1e486da0320b' }, h("thead", { key: '2f1f7363a18d0ee02bbe3cfac371e964f2277cb6' }, h("tr", { key: '4932e213f82fc64d695eaba8c075ee0ef233a0c0' }, this.headers.map((header) => (h("th", null, header))))), h("tbody", { key: '1340dc29a3277a3d864956111a6606cae0b72bb4' }, this.rows.map((row) => (h("tr", null, row.map((cell) => (h("td", null, cell)))))))));
    }
    static get is() { return "table-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["table-component.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["table-component.css"]
        };
    }
    static get properties() {
        return {
            "headers": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "headers",
                "reflect": false
            },
            "rows": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "rows",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=table-component.js.map
