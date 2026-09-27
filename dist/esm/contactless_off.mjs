export const name="contactless_off";
export const id="dl_67de0a200f3ffd21b708";
export const url=new URL("../icons/contactless_off.svg?v=bbcb7fd26a7e0c6df46a800a8a96b5b0a7f5b187c1d32446ff6524142dabcfc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
