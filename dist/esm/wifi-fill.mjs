export const name="wifi-fill";
export const id="dl_c21b5420a34ce56b8680";
export const url=new URL("../icons/wifi-fill.svg?v=037def215ea1b8df45fcef70af276e95c6f0075569d0ae2dc9cf30b2b66bae32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
