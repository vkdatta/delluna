export const name="sms";
export const id="dl_feaa8cfc5c374a039970";
export const url=new URL("../icons/sms.svg?v=81ffc3b4df6d5f77187b4885b086f1d6b3236c10bd6cd27d6a3984688c19da99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
