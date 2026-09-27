export const name="dry-fill";
export const id="dl_61692bfb802c42135781";
export const url=new URL("../icons/dry-fill.svg?v=5d606bbe714e6cd139741868b7d1bf29d4b11ed0b3e3b7e96f5967cb733033ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
