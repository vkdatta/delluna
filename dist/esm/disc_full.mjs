export const name="disc_full";
export const id="dl_362c20a10b564cc38544";
export const url=new URL("../icons/D/disc_full.svg?v=bb2dfd818368a5d3ed9c46a1aaf9246a7098ebb18790b3d27dff2127eb565f95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
