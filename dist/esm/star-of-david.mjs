export const name="star-of-david";
export const id="dl_38be3869bf657929a982";
export const url=new URL("../icons/star-of-david.svg?v=83b41eba885891a756452cffb188ee5f09ed07c743aead42126bf6e63dd95e8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
