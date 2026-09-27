export const name="dots-three-outline-vertical-fill";
export const id="dl_c0be49c600c14d54b2a4";
export const url=new URL("../icons/dots-three-outline-vertical-fill.svg?v=a7963e3d0e06e3ac47e23e9d8306fdc1ca140e5b50657684e5a474f27b4cf3ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
