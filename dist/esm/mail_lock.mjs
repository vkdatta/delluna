export const name="mail_lock";
export const id="dl_e5b0ca3c42f3295db062";
export const url=new URL("../icons/mail_lock.svg?v=81402c4c40007fe36fa656f7714f9e6854d76481f3243371935b5411a7a24bd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
