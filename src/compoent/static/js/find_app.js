class _TxN {
    _fn(_x) {
        const __NumberArray = [];
        const __numbrer = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const __string = [..._x];
        for (let itam of __string) {
            if (__numbrer.includes(itam)) {
                __NumberArray.push(itam);
            }
        }
        return (__NumberArray.length > 0 ? Number(__NumberArray.join('')) : null);
    }
    ;
    _ft(_x) {
        const _string_charAt = /[a-z]/i;
        let __string_key = false;
        const t = escape(_x).replace(/20%/gi, '');
        const _c = unescape(t);
        var __string_resalt = _c;
        var __string = _c;
        for (let itam of [...__string]) {
            if (new RegExp(_string_charAt).test(itam)) {
                __string_key = true;
                __string = __string_resalt.replace(/[0-9]/gi, '');
            }
        }
        const _l_r = escape(__string).replace(/20%/gi, '');
        const _resalt = unescape(_l_r);
        return (_resalt.length > 0 && __string_key == true ? String(_resalt) : null);
    }
    ;
    _ftn(_x) {
        const __NumberArray = [];
        const _number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        let __string_key = false;
        const _string_charAt = /[a-z]/i;
        const t = escape(_x).replace(/20%/gi, '');
        const _c = unescape(t);
        var __string_resalt = _c;
        var __string = _c;
        for (let itam of [...__string]) {
            if (_number.includes(itam)) {
                __NumberArray.push(itam);
            }
            if (new RegExp(_string_charAt).test(itam)) {
                __string_key = true;
                __string = __string_resalt;
            }
        }
        const _l_r = escape(__string).replace(/20%/gi, '');
        const _resalt = unescape(_l_r);
        return [
            String([...__string].join('')),
            (_resalt.length > 0 && __string_key == true ? String(_resalt) : null),
            (__NumberArray.length > 0 ? Number(__NumberArray.join('')) : null)
        ];
    }
    ;
    _r_all_s(_x) {
        const __string = escape(_x).replace(/%20/gi, '');
        const __string_v1 = unescape(__string);
        return (__string_v1.length > 0 ? String(__string_v1) : null);
    }
    ;
    _r_m_s(_x) {
        const __string = escape(_x).replace(/20%/gi, '');
        const __string_v1 = unescape(__string);
        return (__string_v1.length > 0 && __string_v1 !== " " ? String(__string_v1) : null);
    }
    _fsl(_x) {
        const __StringArray = [];
        const _string_charAt = /[a-z]/;
        const __string = [..._x];
        for (let itam of __string) {
            if (new RegExp(_string_charAt).test(itam)) {
                __StringArray.push(itam);
            }
        }
        return (__StringArray.length > 0 ? String(__StringArray.join('')) : null);
    }
    ;
    _fcl(_x) {
        const __StringArray = [];
        const _string_charAt = /[A-Z]/;
        const __string = [..._x];
        for (let itam of __string) {
            if (new RegExp(_string_charAt).test(itam)) {
                __StringArray.push(itam);
            }
        }
        return (__StringArray.length > 0 ? String(__StringArray.join('')) : null);
    }
    ;
}
class _TxN_all extends _TxN {
    _all(_x) {
        const __v0 = super._fn(_x);
        const __v1 = super._ft(_x);
        const __v2 = super._ftn(_x);
        const __v3 = super._r_all_s(_x);
        const __v4 = super._r_m_s(_x);
        const __v5 = super._fsl(_x);
        const __v6 = super._fcl(_x);
        return [_x, __v0, __v1, __v2, __v3, __v4, __v5, __v6];
    }
}
const _newTxN = new _TxN();
const _newTxN_all = new _TxN_all();
export { _newTxN as _f, _newTxN_all as _f_all, };
//# sourceMappingURL=_find_app.js.map