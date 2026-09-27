export const name="thermometer-light";
export const id="dl_91f126a129e92c6a476b";
export const url=new URL("../icons/thermometer-light.svg?v=dfc2ce853bd93f28e219b0ccbf9a5ea1f15351e8d0bc6df4fca3a449feb10b15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
