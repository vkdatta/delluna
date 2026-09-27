export const name="timelapse-fill";
export const id="dl_0e393fbded9f2abbaedd";
export const url=new URL("../icons/timelapse-fill.svg?v=07eb2bac5023bf7608427e1c5403cdab54545ee860ae8fddb1aed0fa89ecb421",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
