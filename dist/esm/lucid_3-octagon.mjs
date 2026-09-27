export const name="lucid_3-octagon";
export const id="dl_4f97102569904f4fbdca";
export const url=new URL("../icons/lucid_3-octagon.svg?v=2c65b9be8971387a4400b27cc503163b2e486c90e7bc5effcd39000cb1fcd645",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
