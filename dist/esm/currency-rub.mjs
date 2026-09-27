export const name="currency-rub";
export const id="dl_f1eea9876b954e04bee8";
export const url=new URL("../icons/currency-rub.svg?v=bdeed07fdb1b4c7b6e74ab548a879c7312e5351ce79be77b197bf112b2ce67a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
