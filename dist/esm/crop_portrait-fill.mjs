export const name="crop_portrait-fill";
export const id="dl_e674f39edc8b1ae6ee86";
export const url=new URL("../icons/crop_portrait-fill.svg?v=e06015d62a2d0d6fb41c313e729e9cdc79c1d77757a31c5e14c84f996fcdc8bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
