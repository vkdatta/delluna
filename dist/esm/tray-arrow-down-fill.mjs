export const name="tray-arrow-down-fill";
export const id="dl_607f8962b5672f819468";
export const url=new URL("../icons/tray-arrow-down-fill.svg?v=e70a4c575bceae5d99a82c37907d99267301147b09f02e99fb9c06d15abb2287",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
