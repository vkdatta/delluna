export const name="high_density";
export const id="dl_d1165f070fbe41a2bda8";
export const url=new URL("../icons/H/high_density.svg?v=45c30a77bb0e6b71495ccce3d928ae65047931f7dcaa6a1ffbb6402f500657c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
