export const name="language_spanish-fill";
export const id="dl_7e803f6af2184fe5a7cd";
export const url=new URL("../icons/L/language_spanish-fill.svg?v=fcf9a2967b2e2b801d15288bc865ce5e9d5ebda5a29a3069633d82294ad52740",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
