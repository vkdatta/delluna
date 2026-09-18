export const name="raw_on-fill";
export const id="dl_8d15e5f2a1f447efacb7";
export const url=new URL("../icons/raw_on-fill.svg?v=3e02281cc7bb67ef806e8905be49c52abbf0262115ddb211fcc9d1f0c2f5f2c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
