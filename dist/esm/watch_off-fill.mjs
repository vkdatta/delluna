export const name="watch_off-fill";
export const id="dl_24eec07dc4264b3c90d0";
export const url=new URL("../icons/watch_off-fill.svg?v=12546e901a6c20a91d8ba3d3dab1b9ff1a8b8684723e5510c9fcf6ecdab6a58b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
