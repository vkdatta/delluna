export const name="lucid_2-layers-2";
export const id="dl_9c04083a21c1498eac1d";
export const url=new URL("../icons/lucid_2-layers-2.svg?v=1473dfad6983a4cb2fdb552b279e01721a7d008e831720a183bcb81fdfc0199e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
