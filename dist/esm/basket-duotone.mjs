export const name="basket-duotone";
export const id="dl_9d8e0e33c97b44988e38";
export const url=new URL("../icons/basket-duotone.svg?v=53e7757cb76c648a482b2d37d517a562f6912e9210d7ebc4df2477c2beafad82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
