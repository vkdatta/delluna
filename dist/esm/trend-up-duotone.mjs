export const name="trend-up-duotone";
export const id="dl_2ed91cc0a63f48f79063";
export const url=new URL("../icons/T/trend-up-duotone.svg?v=6c5627f33e08fb1699cb37d25d3d9e606c12024d9c04d770e6c83ffbd30b61a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
