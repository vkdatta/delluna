export const name="currency-btc";
export const id="dl_b4dfd2979d85444ea5e0";
export const url=new URL("../icons/currency-btc.svg?v=b18521296fe3a50ad3d18a807ad44f8cb906318df61f5e5fb165a4bc83440469",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
