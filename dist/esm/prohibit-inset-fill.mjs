export const name="prohibit-inset-fill";
export const id="dl_777ddee3ae34479cafeb";
export const url=new URL("../icons/prohibit-inset-fill.svg?v=d0bc68f787285dd3ccc9b739e80dca7ee059c1e6d48486c1c78e270a7d7d3c39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
