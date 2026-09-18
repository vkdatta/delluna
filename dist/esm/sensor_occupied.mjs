export const name="sensor_occupied";
export const id="dl_40632b4498664251b2ed";
export const url=new URL("../icons/S/sensor_occupied.svg?v=2087d509fb0fb254404d1589d7fcdaac5ec99a9921fc8499bc23ee7ca7e67762",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
