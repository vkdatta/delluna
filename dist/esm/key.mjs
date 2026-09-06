export const name="key";
export const id="dl_3b735e5e29f09a25f339";
export const url=new URL("../icons/key.svg?v=61694102f24a2eb4ce68f337fb6bf81090aef219328cb10dc2bd3f3c9e2ea266",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
