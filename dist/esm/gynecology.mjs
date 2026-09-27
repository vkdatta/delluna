export const name="gynecology";
export const id="dl_f3d0db342b8246dda777";
export const url=new URL("../icons/gynecology.svg?v=b077886eff7c2ef6d210f2e7aae2162e9ded59e12e45a0d5756bcd60357041f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
