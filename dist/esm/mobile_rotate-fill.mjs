export const name="mobile_rotate-fill";
export const id="dl_680a344c1386fbeb7dba";
export const url=new URL("../icons/mobile_rotate-fill.svg?v=a2b0438d1ec5cecdf835302bf553ef67c5cf737c51d95a36e8dbdf49faeee03b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
