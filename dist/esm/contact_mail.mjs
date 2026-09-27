export const name="contact_mail";
export const id="dl_680b6082cd7506fed987";
export const url=new URL("../icons/contact_mail.svg?v=06bf5e1440af35c502496927a0d5e3541ffc6150cfe8d369da111b4ce0991ea1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
