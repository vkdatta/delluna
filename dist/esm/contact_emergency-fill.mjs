export const name="contact_emergency-fill";
export const id="dl_fa675979296b4f928c90";
export const url=new URL("../icons/C/contact_emergency-fill.svg?v=5e917e95494f0294a8c011a45fdb481d7b24652463a09ec91a8675b0c2464392",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
