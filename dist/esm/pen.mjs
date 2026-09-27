export const name="pen";
export const id="dl_f0252156612f411badd1";
export const url=new URL("../icons/pen.svg?v=140ef3c05d0d324802d774f0fbe7622ab5fd65a1a928241c20c19c0c28251178",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
