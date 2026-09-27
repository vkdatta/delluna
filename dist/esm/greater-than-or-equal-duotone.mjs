export const name="greater-than-or-equal-duotone";
export const id="dl_16136ca0974c431d856f";
export const url=new URL("../icons/greater-than-or-equal-duotone.svg?v=62990523d8b0c9c348b9ae7ab2ccdac0ee3a7dff0cde93624fcc7482c56031fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
