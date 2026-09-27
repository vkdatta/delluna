export const name="water_bottle-fill";
export const id="dl_209129f57f67a217ef25";
export const url=new URL("../icons/water_bottle-fill.svg?v=c80f76dfbc2a94b2e6ec01a59891200f84a9ac9bb74fcd6e478954d21b26576a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
