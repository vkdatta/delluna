export const name="mail_shield";
export const id="dl_3eb6d06b1aec54a766cf";
export const url=new URL("../icons/mail_shield.svg?v=d2c37b8680796ad024c18489b8f63b583db67324d09e9d915a49ce8c32670e59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
