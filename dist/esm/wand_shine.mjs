export const name="wand_shine";
export const id="dl_36dc90b659ebd0117ef5";
export const url=new URL("../icons/wand_shine.svg?v=d589a52c9a8f18a8171ee9d8f5162e05569449b2b14db9384d5924569ec1d9cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
