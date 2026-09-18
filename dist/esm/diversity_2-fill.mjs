export const name="diversity_2-fill";
export const id="dl_2194bef4081943988d13";
export const url=new URL("../icons/diversity_2-fill.svg?v=00a3639387eca0b70dd895b349ea3d0e9ded28bdd1b1396f3d4d2b285b309ea8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
