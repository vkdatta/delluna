export const name="looks_6-fill";
export const id="dl_ce84ec5846bd842a5f98";
export const url=new URL("../icons/looks_6-fill.svg?v=2abd15f2e2aff43f9e0184b5a4faba82a3099e10a0d4ad94400b65b1cb9ab01b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
