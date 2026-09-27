export const name="policy_alert";
export const id="dl_5ee81fb182313001ac81";
export const url=new URL("../icons/policy_alert.svg?v=fbbd39bcd4aaf8f93271403b3243c0c5a09b1a5c5626982880e0c65e6ffb7bdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
