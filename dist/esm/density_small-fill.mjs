export const name="density_small-fill";
export const id="dl_9e9d6cb12c0fb323ef99";
export const url=new URL("../icons/density_small-fill.svg?v=e3afc393b399c376abc852e598d81f729843f5e51f229a4385548980efb00d84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
