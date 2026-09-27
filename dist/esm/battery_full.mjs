export const name="battery_full";
export const id="dl_2ccdb92ac93f38632349";
export const url=new URL("../icons/battery_full.svg?v=6cb07e207a04d8a232f119f3670d7983b82826351148d445f47d55e8c6c14eb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
