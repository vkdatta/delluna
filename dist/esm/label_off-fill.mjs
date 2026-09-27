export const name="label_off-fill";
export const id="dl_0d3c6aaf4ceca3d693d6";
export const url=new URL("../icons/label_off-fill.svg?v=08c55b21ac3c774c2371e4c04f74c6e18a143203c02494293961e95a0741734e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
