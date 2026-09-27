export const name="join_right";
export const id="dl_78a380a60e25e26a861e";
export const url=new URL("../icons/join_right.svg?v=6951cd5b3b25e7123ae6fc7749b958ac71fac74a0127e6e15fc8555ae18458d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
