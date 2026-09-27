export const name="light_group-fill";
export const id="dl_b9ca0b2bce0219ec82b8";
export const url=new URL("../icons/light_group-fill.svg?v=0d70dd2b57a03d96df34e00a25cd20359383ad77750c9b32cd78beb285a4951c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
