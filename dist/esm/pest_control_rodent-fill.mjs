export const name="pest_control_rodent-fill";
export const id="dl_54a714c8c34c4756984c";
export const url=new URL("../icons/pest_control_rodent-fill.svg?v=54b5458bc1656009252e9d37d9508db47323c7903bdc490994ef1697bfe31a9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
