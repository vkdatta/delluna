export const name="nest_eco_leaf-fill";
export const id="dl_4470ed6753767d68a9c3";
export const url=new URL("../icons/nest_eco_leaf-fill.svg?v=cd33d8282d95577ae7eb953db1e68df803c040f5af5a56824ed92077791e9ef6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
