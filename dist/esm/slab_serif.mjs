export const name="slab_serif";
export const id="dl_a32ff82205afcda97258";
export const url=new URL("../icons/slab_serif.svg?v=c6559a952cd786046d445f8ea47b2b8fd45b65884a7797b5819ea405c58ebe78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
