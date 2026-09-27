export const name="nest_sunblock-fill";
export const id="dl_a06d106c782e78a4803d";
export const url=new URL("../icons/nest_sunblock-fill.svg?v=f7599979a0c9b90eadc37fbd114ea00bac257cd092a06f86f3f7406a5db270cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
