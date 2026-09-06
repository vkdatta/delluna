export const name="cardholder-thin";
export const id="dl_9ae136b86ee54572aa6a";
export const url=new URL("../icons/cardholder-thin.svg?v=def77ec8d04d06b4bb74df091dc8838d86aa2a2a3867b36de1031320ce6ddcd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
