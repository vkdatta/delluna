export const name="butterfly-fill";
export const id="dl_ce2c7547c2334274bbcc";
export const url=new URL("../icons/butterfly-fill.svg?v=9c051fc7ee384972e9d39a7281a1987b2b988514abb1f36e706ea1e5ada6c75e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
