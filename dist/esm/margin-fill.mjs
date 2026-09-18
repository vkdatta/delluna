export const name="margin-fill";
export const id="dl_1f7576c6597143959828";
export const url=new URL("../icons/M/margin-fill.svg?v=cae81881a9e8069d419b0b68e07c23bb55826b061dffacec193d20c057407d24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
