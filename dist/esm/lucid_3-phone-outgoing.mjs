export const name="lucid_3-phone-outgoing";
export const id="dl_d8502541c20f4129ae13";
export const url=new URL("../icons/lucid_3-phone-outgoing.svg?v=7502259e7ac05feef1e4542b010c3b1be3ffeafa8445d66cb2c1b493c4fe032c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
