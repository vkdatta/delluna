export const name="schedule_send";
export const id="dl_c5fe7b1d758c5b61e015";
export const url=new URL("../icons/schedule_send.svg?v=c01be0096a78cd8cf339248365d822bf3603cce3a7a724da77b9e2eab63f8292",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
