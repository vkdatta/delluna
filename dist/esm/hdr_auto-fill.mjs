export const name="hdr_auto-fill";
export const id="dl_dc6fee3c90ebbb8cb466";
export const url=new URL("../icons/hdr_auto-fill.svg?v=2ff1b3d229aea7dfab9851b8399252f9c1ed9fea28bc02c26501a8b795cb9d38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
