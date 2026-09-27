export const name="currency-gbp-duotone";
export const id="dl_c5a3bb9400ba47d19926";
export const url=new URL("../icons/currency-gbp-duotone.svg?v=6e27527201526eaad0b6593628c218cbb8a168a507f62f0ae0a58e09e4dce237",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
