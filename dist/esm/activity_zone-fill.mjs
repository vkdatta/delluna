export const name="activity_zone-fill";
export const id="dl_be0505d448971e832a4b";
export const url=new URL("../icons/activity_zone-fill.svg?v=a54983cda63500897d1cfdf4938155ca63fe9e4403347e635aa83ecfc9936a62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
