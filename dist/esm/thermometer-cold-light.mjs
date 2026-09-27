export const name="thermometer-cold-light";
export const id="dl_678c6a137b665d958f57";
export const url=new URL("../icons/thermometer-cold-light.svg?v=e3a3395cb3039f0a5db9090713877f7f83d88f50a51c736b6b62b12ef270e2d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
