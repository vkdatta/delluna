export const name="speed_1_25-fill";
export const id="dl_ca5dd74ec7ece0a5f54a";
export const url=new URL("../icons/speed_1_25-fill.svg?v=f807af8fd89f5ac52fe46fdce33b32aea2ae7972de7734620e702e3bbde7215d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
