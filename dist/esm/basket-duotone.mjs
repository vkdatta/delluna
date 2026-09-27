export const name="basket-duotone";
export const id="dl_9d8e0e33c97b44988e38";
export const url=new URL("../icons/basket-duotone.svg?v=9883f57f6ad4e65c240640d658e8cbb5a64cf97b5e61ea8e853faf6ceea288e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
