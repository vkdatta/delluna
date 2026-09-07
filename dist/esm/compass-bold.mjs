export const name="compass-bold";
export const id="dl_9af24588d6f741818e53";
export const url=new URL("../icons/compass-bold.svg?v=b01b0f49ade539c501b7a1b0b3d421aee58d9f46c1e1dbdfe5f25a7a4fc8b7f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
