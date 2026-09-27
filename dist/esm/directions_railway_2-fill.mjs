export const name="directions_railway_2-fill";
export const id="dl_1196e4a92561ae331970";
export const url=new URL("../icons/directions_railway_2-fill.svg?v=5c0f2d75e2e58eeddfd6fa5a8e3e5fac349b07345cda0e0406dd797ac83ef050",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
