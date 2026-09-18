export const name="salinity";
export const id="dl_41ae360553554dacb0a7";
export const url=new URL("../icons/S/salinity.svg?v=08e68b247cefd1e8ba7f236b590b319f3e1f23c5af1370ca28a0fa4b573b631c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
