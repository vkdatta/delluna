export const name="contact_mail";
export const id="dl_bdec366bb71911817529";
export const url=new URL("../icons/contact_mail.svg?v=7b1e2ea4df5894f25fe42f2b7b1ad7aa044349a22d13ab1ef0155c476d3316ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
