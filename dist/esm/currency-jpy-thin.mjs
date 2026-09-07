export const name="currency-jpy-thin";
export const id="dl_f5076995362d46269401";
export const url=new URL("../icons/currency-jpy-thin.svg?v=e329b2473cb4cd2d91de1c3adbaad8579fa4ad3295f4395930fedb8dad93aed8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
