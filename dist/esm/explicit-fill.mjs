export const name="explicit-fill";
export const id="dl_22c46d57ab04320d33ed";
export const url=new URL("../icons/explicit-fill.svg?v=e2d32e10a0949012a0cbcc0b737c9290d2f2b24fea7d281b49a79744795eda15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
