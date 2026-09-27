export const name="chat-centered-fill";
export const id="dl_e5e9e023997a47d28964";
export const url=new URL("../icons/chat-centered-fill.svg?v=d940ec4a7f5b75934e7f772d8a03ddd9b5b1409d2af856c9255bf61f895276be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
