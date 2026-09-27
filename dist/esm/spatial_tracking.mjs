export const name="spatial_tracking";
export const id="dl_1a648717d79998d36076";
export const url=new URL("../icons/spatial_tracking.svg?v=b94e142e7d10de1e9a7c50c1e04a07d6c2bfe18e4d09ffcf2c8c459b137a1538",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
