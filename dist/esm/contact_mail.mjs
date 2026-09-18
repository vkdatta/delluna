export const name="contact_mail";
export const id="dl_c3d1bca396c24d2aa21f";
export const url=new URL("../icons/contact_mail.svg?v=539bb58828f6fcabd330f95cb9bbd474de2147f368da549d63fb2a52f4bee4f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
