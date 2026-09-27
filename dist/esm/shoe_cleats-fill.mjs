export const name="shoe_cleats-fill";
export const id="dl_b2b8d10b4f9f6e146009";
export const url=new URL("../icons/shoe_cleats-fill.svg?v=ffbc7ac2743a71bcb5fe38582a223cd72e120c68df46d0ef0ab936633b71c068",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
