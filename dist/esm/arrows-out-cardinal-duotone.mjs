export const name="arrows-out-cardinal-duotone";
export const id="dl_0c0c1c10da9b483181b9";
export const url=new URL("../icons/arrows-out-cardinal-duotone.svg?v=ee7077198f2a83069d6fdbbda2ab5fce169ee395933a77875e2821d38ae39961",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
