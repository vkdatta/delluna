export const name="arrow-square-in-duotone";
export const id="dl_f3ca522121b043dcad98";
export const url=new URL("../icons/arrow-square-in-duotone.svg?v=870e10096fef31d7876fda4c033ae80ec863be7f33d985283fe435fcaaf604e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
