export const name="text-h-two-light";
export const id="dl_b7518c5667ac16d42bf4";
export const url=new URL("../icons/text-h-two-light.svg?v=388b7d102d791961ff2626aa34d896f403f1ca7cb375124a30de49e9121ad608",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
