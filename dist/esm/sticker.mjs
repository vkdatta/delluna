export const name="sticker";
export const id="dl_e5d21b8b710bc50f185c";
export const url=new URL("../icons/sticker.svg?v=08871d997d1b1ab940e9b35e8928945a8e08baeb1d85ff0f71f89380d3819bb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
