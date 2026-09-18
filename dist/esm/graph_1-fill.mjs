export const name="graph_1-fill";
export const id="dl_e17391fc6fb04ba69e1a";
export const url=new URL("../icons/G/graph_1-fill.svg?v=adc326393549c3d376bac7f668492bb9fc19db4dfe793d86a0f37032574ca1f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
