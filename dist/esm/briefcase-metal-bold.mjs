export const name="briefcase-metal-bold";
export const id="dl_ac6479efb5e445a88988";
export const url=new URL("../icons/briefcase-metal-bold.svg?v=bd17ce2f47f000497a072c5c25f8158e2ce678dfaf95900974f4bc729b62c8cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
