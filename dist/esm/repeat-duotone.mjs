export const name="repeat-duotone";
export const id="dl_923f5e9c930b4d339515";
export const url=new URL("../icons/repeat-duotone.svg?v=f61d6986121f94437144a1e491cfe0a9137788168765fa49fbf590053ff513a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
