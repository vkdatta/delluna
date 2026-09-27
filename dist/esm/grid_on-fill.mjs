export const name="grid_on-fill";
export const id="dl_621b14a7313fe471ae86";
export const url=new URL("../icons/grid_on-fill.svg?v=761a65a3b2aec118ec3aecba8358c2389a5ebee84642ff547b211c26f88289db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
