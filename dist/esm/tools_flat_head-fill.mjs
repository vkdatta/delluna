export const name="tools_flat_head-fill";
export const id="dl_d02136bfc35448362fcd";
export const url=new URL("../icons/tools_flat_head-fill.svg?v=25050af6b3e0d6a219094907d22da4250b4c4eb77a238226049d053214e69b2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
