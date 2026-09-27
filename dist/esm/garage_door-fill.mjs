export const name="garage_door-fill";
export const id="dl_b09fdb9208db2a217c7d";
export const url=new URL("../icons/garage_door-fill.svg?v=54a1786d1b91759317a5187ad4781ea34bfc40734685cffdaa2e90087555d507",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
