export const name="order_approve";
export const id="dl_e32c8642bf253fb1a3bf";
export const url=new URL("../icons/order_approve.svg?v=6f753de508819b7efeaa94d36e9efb3b8a4abfc92e415860af4b400f0a74aabf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
