export const name="stock_media";
export const id="dl_5db5cdcb70be425ba6ab";
export const url=new URL("../icons/S/stock_media.svg?v=ad4c0414947e2fc57859fa519db005fc6657630eca86ec53a00f4e8ff2869f1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
