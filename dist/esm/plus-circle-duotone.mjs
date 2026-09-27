export const name="plus-circle-duotone";
export const id="dl_5754bcde7caf4891b9c3";
export const url=new URL("../icons/plus-circle-duotone.svg?v=780e26a9659eaecd866b79039a96e1b8f6c459dd3fd4164a3105c5a3104b3175",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
