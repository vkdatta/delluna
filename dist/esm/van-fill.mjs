export const name="van-fill";
export const id="dl_1281e554c26b4f26862f";
export const url=new URL("../icons/V/van-fill.svg?v=a043ccc14faac0f9281a63737dc49f55e31a65837cf57c7214a5badb2d4a6ced",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
