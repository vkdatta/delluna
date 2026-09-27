export const name="currency-krw-bold";
export const id="dl_d235f91e8dc84920bf63";
export const url=new URL("../icons/currency-krw-bold.svg?v=76093cbe4b6e9fe050f73f0ea12992c491ab7b060b402ba3f25e9604efc26bcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
