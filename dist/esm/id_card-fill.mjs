export const name="id_card-fill";
export const id="dl_d9fa40a895e74becaec3";
export const url=new URL("../icons/id_card-fill.svg?v=f400ced0905e0650ba414356803078d4557995966f8521d2c4581cab829c18fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
