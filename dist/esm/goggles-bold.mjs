export const name="goggles-bold";
export const id="dl_7b266cc7dc524e4d856b";
export const url=new URL("../icons/goggles-bold.svg?v=1fee14de36e6c58efff600716eebc7bb140b08473ab30d598aa11c2da14f2880",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
