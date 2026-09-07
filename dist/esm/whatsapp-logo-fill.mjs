export const name="whatsapp-logo-fill";
export const id="dl_e592ee5d57ba47b8954e";
export const url=new URL("../icons/W/whatsapp-logo-fill.svg?v=06fc31ed3a8204bdd17c1e4682b2c64b5b53069736ef41ef1a038d5fd0c46f25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
