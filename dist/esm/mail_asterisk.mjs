export const name="mail_asterisk";
export const id="dl_ed34304e0c364098a40d";
export const url=new URL("../icons/mail_asterisk.svg?v=14a6eac8778e2c62e999ae45ea0d07e934a5815047fc1b1696fe7b479c967f55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
