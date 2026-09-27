export const name="currency_bitcoin-fill";
export const id="dl_52d459972a9232847b8e";
export const url=new URL("../icons/currency_bitcoin-fill.svg?v=2fe8e59b773ceedc41d6e3de252a4795a979b27ce47948bb3cec5838b374bb60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
