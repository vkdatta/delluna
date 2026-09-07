export const name="selection-duotone";
export const id="dl_e898bf4aaa6c4514b97b";
export const url=new URL("../icons/S/selection-duotone.svg?v=58ad0fe50f15299c566ecd6052bd859ab486c5a6b230b0f59070dbf65169af71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
