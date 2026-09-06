export const name="lucid_3-map-pin-minus";
export const id="dl_1ba2a560f47e448f8bea";
export const url=new URL("../icons/lucid_3-map-pin-minus.svg?v=215f51e814a80e4b1bccef182cbf8ff689ed67c59bd97f4ef94626ddfea17410",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
