export const name="lucid_2-image-off";
export const id="dl_387ec51e79c04a178b24";
export const url=new URL("../icons/lucid_2-image-off.svg?v=843bb6a433e9453886e2b956f45a568ccf1668c94a8a3d3f0ed71b3d6e17a589",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
