export const name="person-simple-hike";
export const id="dl_f6031b801a6a44b2be2c";
export const url=new URL("../icons/person-simple-hike.svg?v=4668fe08d83fd4d83267c6adddaf4aa22f12773eea1ee7557105ed4cb68dba68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
