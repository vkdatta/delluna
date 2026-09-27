export const name="shop_two";
export const id="dl_0b8c0180930aa0187a29";
export const url=new URL("../icons/shop_two.svg?v=7b0d4a559078a876a7a9c57cef86ad1d67dc62cf4e4e771272d45df8cc55bf5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
