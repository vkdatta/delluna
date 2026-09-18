export const name="matter-fill";
export const id="dl_18f2559514c94542bc0b";
export const url=new URL("../icons/M/matter-fill.svg?v=5ff37c5d143c0f73c3d2eae95ed96352cdafd242bf1b613661efbc87ebb4f034",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
