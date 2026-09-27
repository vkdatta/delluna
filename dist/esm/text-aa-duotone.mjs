export const name="text-aa-duotone";
export const id="dl_195c9fac86bbe3d3a573";
export const url=new URL("../icons/text-aa-duotone.svg?v=7835f64a7afd554beffeb575d00e6b9f5a87ae1cf8d84539698492ad012d58c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
