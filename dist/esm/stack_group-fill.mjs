export const name="stack_group-fill";
export const id="dl_9fb0bc7938223e3f9512";
export const url=new URL("../icons/stack_group-fill.svg?v=aac12933abf0f48f6caba9fa23c873ca949b1ef8ecb1c6cae6d7eabb803a3c8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
