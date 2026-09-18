export const name="mail_asterisk-fill";
export const id="dl_7f3f7f0d16ba489bb7ef";
export const url=new URL("../icons/mail_asterisk-fill.svg?v=e8a967ceef0eb15adf49c2b41dabe8e6142999622cd228ef08b55abc1d8f1c67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
