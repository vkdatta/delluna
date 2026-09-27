export const name="contact_phone";
export const id="dl_4fa1ad155efa3db350be";
export const url=new URL("../icons/contact_phone.svg?v=7c6d0238233ebe31a07c17fa48dbdc7a7dc5a58f1df6976831bfe41088e8a0a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
