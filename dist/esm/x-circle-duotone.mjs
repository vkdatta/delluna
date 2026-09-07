export const name="x-circle-duotone";
export const id="dl_4da8ee215c4c4dd6b148";
export const url=new URL("../icons/X/x-circle-duotone.svg?v=62a1dc9fb293f84fd6671cc44ebeecbea30a52a671264d2a737b3e687d3d601f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
