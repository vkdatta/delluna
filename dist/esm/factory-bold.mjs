export const name="factory-bold";
export const id="dl_d6a2f6d282e9499b8f5a";
export const url=new URL("../icons/factory-bold.svg?v=bdbbbb6037ec190a7ae3d66d97569abdb7eb597ba627ba8dc96b4f2a2eee0d3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
