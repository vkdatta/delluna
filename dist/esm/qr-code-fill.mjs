export const name="qr-code-fill";
export const id="dl_7faae22a07984e88ade0";
export const url=new URL("../icons/qr-code-fill.svg?v=d87150bce4bbbaba5deff91cbb9166b709cae952f213c006e6d1951932e066d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
