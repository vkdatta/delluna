export const name="house-simple-light";
export const id="dl_5dcb858eac16469c8f75";
export const url=new URL("../icons/house-simple-light.svg?v=b6734a4e79ddc51c8bf04557a435a7640afb8f346c341498cd6265c95a9baca1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
