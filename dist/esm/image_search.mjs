export const name="image_search";
export const id="dl_d854cc7abfd00ebd9b7c";
export const url=new URL("../icons/image_search.svg?v=70e92c99f938c502397a934d831b7a94ac3dd6458684a6132c8d47f375874dae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
