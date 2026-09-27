export const name="mail_lock";
export const id="dl_1e6afe599731a3dd0e0a";
export const url=new URL("../icons/mail_lock.svg?v=09fe2ca4f85da6ecd2095690b7cb7acd31cbe43aa5dd2dd43551478e42c294a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
