export const name="split-horizontal-duotone";
export const id="dl_1fa30344efca8c5d4b0f";
export const url=new URL("../icons/split-horizontal-duotone.svg?v=a014d3b08059ac117b02ef7f0567933ddea71811d476a134bb229a2a3cbde4b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
