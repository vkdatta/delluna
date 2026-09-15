export const name="contact_mail-fill";
export const id="dl_743bae3371b94f799e3f";
export const url=new URL("../icons/C/contact_mail-fill.svg?v=35d9c871fbb5f90908ac9a9c38392c583e946eec991e92225619721300e8b6fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
