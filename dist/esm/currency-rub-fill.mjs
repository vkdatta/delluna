export const name="currency-rub-fill";
export const id="dl_f124a87571d141f99368";
export const url=new URL("../icons/currency-rub-fill.svg?v=95acdedab503a7742a76ede279e6161f92257c64d37876594ef9df4fa36627de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
