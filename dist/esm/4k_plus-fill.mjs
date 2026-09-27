export const name="4k_plus-fill";
export const id="dl_b4b1696366b54f37f084";
export const url=new URL("../icons/4k_plus-fill.svg?v=e3fe5eae342e332fa7a641041a7b476486649a6be699bc8fe37971b9ab7d7d67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
