export const name="floor-fill";
export const id="dl_765be9d8b2aecb4b8b86";
export const url=new URL("../icons/floor-fill.svg?v=a52c61e726774b7c7566e47cd7fe25562adfd0ad3df3d556e076760310cd31d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
