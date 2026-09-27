export const name="rewind-duotone";
export const id="dl_1abd18a4f47b4ce19e7a";
export const url=new URL("../icons/rewind-duotone.svg?v=2ba1a0c8b5dcd24d8f29ce465c6443a1f8b5e9ae51064c765b9a928759355652",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
