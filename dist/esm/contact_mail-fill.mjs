export const name="contact_mail-fill";
export const id="dl_d06c37fc3eba477f47f4";
export const url=new URL("../icons/contact_mail-fill.svg?v=8d1cc0cccf800c67a1926449ac207409ebfb4c6992e7e108fa2a6495e1f58c64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
