export const name="copyleft-duotone";
export const id="dl_ad24d431ed1b49178cb0";
export const url=new URL("../icons/copyleft-duotone.svg?v=5df5f92213c0fa8e0a8e51d17ce97047b6e16a497eca951287fdc6f2ca0a71f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
