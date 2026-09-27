export const name="grid-nine-bold";
export const id="dl_6de73c01abd64d5eaa9b";
export const url=new URL("../icons/grid-nine-bold.svg?v=b70f54073727e74915e60a30772482157d79963e628b8000d0ffd80200717d2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
