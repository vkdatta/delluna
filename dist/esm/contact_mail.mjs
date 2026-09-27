export const name="contact_mail";
export const id="dl_27341c2d4db6f6b99e47";
export const url=new URL("../icons/contact_mail.svg?v=026d4eeee566eaa2573f51d457a71efbc5bba1fc8ac1f66b1c783ab422d59d22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
