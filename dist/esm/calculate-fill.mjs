export const name="calculate-fill";
export const id="dl_af40e6f43e62539e874c";
export const url=new URL("../icons/calculate-fill.svg?v=c076a4270695274bf4c50bd5f452ae43fdee17a28ca83fd87bd93e473d76bd88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
