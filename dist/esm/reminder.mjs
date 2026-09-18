export const name="reminder";
export const id="dl_da19e0560a144acaa2a7";
export const url=new URL("../icons/reminder.svg?v=8fbe65a30df4bbf3fa19ba5a3770a04ea2f62303210d02e2012d45e1564f67bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
