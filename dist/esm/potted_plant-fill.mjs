export const name="potted_plant-fill";
export const id="dl_a264e2e13054d5694e7e";
export const url=new URL("../icons/potted_plant-fill.svg?v=f7190630a83d16eab98076def96ac1e8b5a0b14c2785690a4b6c09c65c946eed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
