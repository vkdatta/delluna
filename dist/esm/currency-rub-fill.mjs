export const name="currency-rub-fill";
export const id="dl_f124a87571d141f99368";
export const url=new URL("../icons/currency-rub-fill.svg?v=bb2dbc7b6a38ee505f8ca39537c0dc7f532ba1e4057be4fa57ac073080c707ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
