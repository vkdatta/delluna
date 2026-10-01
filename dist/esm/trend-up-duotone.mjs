export const name="trend-up-duotone";
export const id="dl_b0769ebea57fbb8efc09";
export const url=new URL("../icons/trend-up-duotone.svg?v=6c5627f33e08fb1699cb37d25d3d9e606c12024d9c04d770e6c83ffbd30b61a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
