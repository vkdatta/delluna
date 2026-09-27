export const name="mail_asterisk-fill";
export const id="dl_f5bb87093794642fba89";
export const url=new URL("../icons/mail_asterisk-fill.svg?v=bea4ec9107248fcd5c2cc3c55d6526009cc707751363ab1ca1e49087049863be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
